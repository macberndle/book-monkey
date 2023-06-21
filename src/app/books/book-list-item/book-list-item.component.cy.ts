// import { NgFor, NgIf } from '@angular/common';
// import { ActivatedRoute, RouterLink } from '@angular/router';
// import { IsbnPipe } from 'src/app/shared/isbn.pipe';
import { BookListItemComponent } from './book-list-item.component';

describe('BookListItemComponent', () => {
  it('should mount', () => {
    cy.mount(BookListItemComponent)
  })

  // it(`should display the book with formatted ISBN`, () => {
  //   cy.mount(`<bm-book-list-item [book]="{
  //     isbn: '0123456789',
  //     title: 'Some Book',
  //     authors:['Author 1']
  //   }"></bm-book-list-item>`, {
  //     imports: [
  //       NgFor,
  //       NgIf,
  //       RouterLink,
  //       IsbnPipe,
  //       BookListItemComponent
  //     ],
  //     providers: [
  //       ActivatedRoute
  //     ]
  //   });

  //   cy.get('a > div').contains('ISBN 012-3456789');
  // });
});
