import {booksController} from '../controllers/books-controller';
import * as express from 'express';

const router = express.Router();

router.get('/books', booksController.getBooks);
router.get('/book/:id', booksController.getById);
router.post('/book', booksController.createBook);
router.patch('/book/:id', booksController.uploadBook);

export = router;
