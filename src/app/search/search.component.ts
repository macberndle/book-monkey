import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  input$ = new Subject<string>();

  constructor(
    private service: BookStoreService
  ){
    this.input$.pipe(
        filter(term => term.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(term => this.service.getAllSearch(term))
      ).subscribe(e => console.log(e))
  }
}
