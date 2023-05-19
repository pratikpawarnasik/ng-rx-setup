import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/book.model';
import * as BookActions from '../actions/book.actions';

export const initialState: Book[]  = [];

//   { title: 'Book 1' , id :1 },
//   { title: 'Book 2' , id :2 },
//   { title: 'Book 3' , id :3 },
//   { title: 'Book 4' , id :4 },
// ];

export const bookReducer = createReducer(
  initialState,
  on(BookActions.loadBooksSuccess, (state, { books }) => [...books]),
  on(BookActions.addBook, (state, { book }) => {
    const newState = [...state, book];
    console.log('Updated Book Array:', newState); // Log the updated book array
    return newState;
  })
);
