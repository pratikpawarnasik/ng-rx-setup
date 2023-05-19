import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BookService } from '../services/book.service';
import * as BookActions from '../actions/book.actions';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.loadBooks),
      mergeMap(() =>
        this.bookService.getBooks().pipe(
          map((books) => BookActions.loadBooksSuccess({ books })),
          catchError((error) => of(BookActions.loadBooksFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {}
}
