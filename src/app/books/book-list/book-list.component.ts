import { Component } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookActions } from '../store/book.actions';
@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(
    private service: BookStoreService,
    private store: Store
  ) {
    this.store.dispatch(BookActions.loadBooks())
    this.books$ = this.service.getAll();
  }
}
