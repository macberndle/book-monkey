import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  input$ = new Subject<string>();

  constructor(){
    this.input$.subscribe(e => console.log(e))
  }

}
