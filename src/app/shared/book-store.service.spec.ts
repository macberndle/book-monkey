import { TestBed } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';
import { Book } from './book';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

fdescribe('BookStoreService', () => {
  let service: BookStoreService;
  const expectedBooks: Book[] = [
    { isbn: '111', title: 'Book 1', authors: [] },
    { isbn: '222', title: 'Book 2', authors: [] }
  ]
  const httpStub = {
    get: () => of(expectedBooks)
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpStub }
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
  })
});
