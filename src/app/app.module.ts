import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookListItemComponent } from './books/book-list-item/book-list-item.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
