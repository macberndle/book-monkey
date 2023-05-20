import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  input$ = new Subject<string>();

  constructor(){
    this.input$.pipe(
        filter(term => term.length >= 3),
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe(e => console.log(e))
  }
}
