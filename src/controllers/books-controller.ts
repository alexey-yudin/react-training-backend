import { Request, Response } from 'express';
import { booksData } from '../data/books-data';
import {Book} from '../models/book';

class BooksController {
  private _books = [...booksData];
  private _defaultImagePath = '/images/default-image.jpg';

  getBooks = (req: Request, res: Response) => {
    return res.json(this._books);
  };

  getById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const book = this._books.find(bookItem => bookItem.id === id);

    return res.json(book);
  };

  createBook = (req: Request, res: Response) => {
    const book: Book = {
      id: this._books.length + 1,
      title: req.body.title || 'Default title',
      price: 0,
      image: this._defaultImagePath,
      description: req.body.description || 'Default description',
      type: req.body.type
    };

    this._books = [book].concat(this._books);

    return res.json(book);
  };

  uploadBook = (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id, 10);

    const existedBook = this._books.find(bookItem => bookItem.id === bookId);

    if (!existedBook) {
      return res.status(400).json({
        error: 'Book not found'
      });
    }

    const book: Book = {
      id: bookId,
      title: req.body.title || existedBook.title,
      price: 0,
      image: existedBook.image || this._defaultImagePath,
      description: req.body.description || existedBook.description,
      type: req.body.type || existedBook.type
    };

    this._books = this._books.map(bookItem => bookItem.id === bookId ? book : bookItem);

    return res.json(book);
  };
}

export const booksController = new BooksController();
