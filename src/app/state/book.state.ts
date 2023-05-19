import { Book } from '../models/book.model';

export interface BookState {
  books: Book[];
  loading: boolean;
  error: any;
}
