/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookStoreService } from './book-store.service';
import { Book } from './book';

describe('BookStoreService', () => {
  let service: BookStoreService;
  let httpMock: HttpTestingController;
  const expectedBooks = [
    { isbn: '111', title: 'Book 1', authors: []},
    { isbn: '222', title: 'Book 2', authors: []}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BookStoreService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should GET a list of all books`, () => {
    let recievedBooks!: Book[];
    service.getAll().subscribe(books => recievedBooks = books);

    // Request aus Warteschlange holen
    const req = httpMock.expectOne( 'https://api5.angular-buch.com/books' );
    expect(req.request.method).toEqual('GET');

    // flush -- jetzt werden die Bücher geholt
    req.flush(expectedBooks);

    expect(recievedBooks).toHaveSize(2);
    expect(recievedBooks[0].isbn).toBe('111');
    expect(recievedBooks[1].isbn).toBe('222');
  });

  // it(`should throw a HttpErrorResponse on server errors`, () => {
  //   let errorResponse!: HttpErrorResponse;
  //   const statusText = 'Internal Server Error';

  //   service.getAll().subscribe({
  //     error: (error: any) => errorResponse = error
  //   });

  //   const req = httpMock.expectOne( 'https://api5.angular-buch.com/books' );

  //   req.flush('Fehler!', {
  //     status: 500,
  //     statusText
  //   });

  //   expect(errorResponse.status).toBe(500);
  //   expect(errorResponse.statusText).toBe(statusText);
  // });
});
