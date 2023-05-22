import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <posts></posts>
    <h2>Books</h2>
   
  `
})



export class AppComponent implements OnInit {
 

  constructor() {
   
   
  }

  ngOnInit(): void {
    
  }

}

function generateUniqueId(): number {
  return Math.floor(Math.random() * 1000000);
}

