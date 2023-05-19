
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { bookReducer } from './reducers/book.reducers';
import { BookEffects } from './effects/book.effects';
import { BookService } from './services/book.service';
import { FormsModule } from '@angular/forms'; // Add this import

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ books: bookReducer }),
    
    EffectsModule.forRoot([BookEffects]),
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}