import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable()
export class BookService {
  getBooks(): Observable<Book[]> {
    // Simulate an API call
    const books: Book[] = [
      { id: 1, title: 'Book 1' },
      { id: 2, title: 'Book 2' },
    ];
    return of(books);
  }
}
