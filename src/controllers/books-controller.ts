import { Request, Response } from 'express';
import { booksData } from '../data/books-data';
import { GetBooksResponse } from '../models/get-books-response';
import { CreateBookResponse } from '../models/create-book-response';
import { UpdateBookResponse } from '../models/update-book-response';

class BooksController {
  private _books = [...booksData];

  getBooks = (req: Request, res: Response) => {
    const response: GetBooksResponse = {
      books: this._books
    };

    return res.json(response);
  };

  createBook = (req: Request, res: Response) => {
    const book = { ...req.body };
    this._books = [book].concat(this._books);

    const response: CreateBookResponse = { book };

    return res.json(response);
  };

  uploadBook = (req: Request, res: Response) => {
    const bookId = req.params.id;
    const book = { ...req.body };
    this._books = this._books.map(bookItem => bookItem.id === bookId ? book : bookItem);

    const response: UpdateBookResponse = { book };

    return res.json(response);
  };
}

export const booksController = new BooksController();
