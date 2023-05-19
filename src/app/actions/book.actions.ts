import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book.model';

export const loadBooks = createAction('[Books] Load Books');

export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: any }>()
);

export const addBook = createAction(
  '[Books] Add Book',
  props<{ book: Book }>()
);


