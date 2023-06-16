import { TestBed } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

fdescribe('BookStoreService', () => {
  let service: BookStoreService;
  let httpMock: {
    get: (url: string) => Observable<Book[]>;
  }
  const expectedBooks: Book[] = [
    { isbn: '111', title: 'Book 1', authors: [] },
    { isbn: '222', title: 'Book 2', authors: [] }
  ]
  // const httpStub = {
  //   get: () => of(expectedBooks)
  // }

  beforeEach(() => {
    httpMock = {
      get: () => of(expectedBooks)
    }
    spyOn(httpMock, 'get').and.callThrough();
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpMock },
        BookStoreService
      ]
    });
    service = TestBed.inject(BookStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should GET a list of all books`, () => {
    let receivedBooks!: Book[];
    service.getAll().subscribe(books => receivedBooks = books);

    expect(receivedBooks).toHaveSize(2);
    expect(receivedBooks[0].isbn).toBe('111');
    expect(receivedBooks[1].isbn).toBe('222');

    expect(httpMock.get).toHaveBeenCalledOnceWith('https://api5.angular-buch.com/books');
  })
});
