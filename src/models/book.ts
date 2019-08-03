import { BookType } from './book-type';

export interface Book {
  id: number;
  image: string;
  title: string;
  text: string;
  price: number;
  type: BookType;
}
