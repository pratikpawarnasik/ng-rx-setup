import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Book } from './models/book.model';
import { selectBooks } from './selectors/book.selectors';
import { loadBooks, addBook } from './actions/book.actions';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  template: `

    <h2>Books</h2>
    <ul>
      <li *ngFor="let book of books$ | async">{{ book.title }}</li>
    </ul>
  
    <form (submit)="onSubmit($event)">
      <input [(ngModel)]="newBookTitle" name="newBookTitle" placeholder="New Book Title">
      <button type="submit">Add Book</button>
    </form>
  `
})



export class AppComponent implements OnInit {
  newBookTitle: string = '';
  books$: Observable<Book[]> = of([]);

  constructor(private store: Store<{ app: AppState }>) {
    this.books$ = this.store.select(state => state.app.books);

    // Log the books array
    this.books$.subscribe(books => console.log([...books]));
  }

  ngOnInit(): void {
    
    console.log("books array"+this.books$);

    this.store.dispatch(loadBooks());
  }



  onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission

    const newBook: Book = {
      title: this.newBookTitle,
      id: generateUniqueId(),
    };
    this.store.dispatch(addBook({ book: newBook }));
    this.newBookTitle = ''; // Reset the input field after adding the book


  }
}

function generateUniqueId(): number {
  return Math.floor(Math.random() * 1000000);
}

