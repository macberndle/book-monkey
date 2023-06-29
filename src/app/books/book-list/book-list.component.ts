import { Component } from '@angular/core';
import { Book } from '../../shared/book';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookActions } from '../store/book.actions';
import { selectAllBooks, selectBooksLoading } from '../store/book.selectors';
@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor( private store: Store ) {
    this.books$ = this.store.select(selectAllBooks);
    this.loading$ = this.store.select(selectBooksLoading);
    this.store.dispatch(BookActions.loadBooks());
  }
}
