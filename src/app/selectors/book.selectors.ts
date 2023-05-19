import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

export const selectBookState = createFeatureSelector<AppState>('books');

export const selectBooks = createSelector(
  selectBookState,
  (state: AppState) => state.books
);
