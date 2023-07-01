import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  private apiUrl = 'https://api5.angular-buch.com';

  constructor(
    private http: HttpClient
  ) { }

  check(isbn: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.apiUrl}/books/${isbn}/check`
    )
  }

  create(book: Book): Observable<Book> {
    return this.http
      .post<Book>(`${this.apiUrl}/books`, book);
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getAllSearch(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books/search/${term}`).pipe(
      catchError(err => {
        console.log(`BookStoreService - getAllSearch() - term: ${JSON.stringify(term)} - Error: ${JSON.stringify(err)} `);
        return of([])
      })
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${isbn}`);
  }

  remove(isbn: string): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/books/${isbn}`);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(
      `${this.apiUrl}/books/${book.isbn}`,
      book
    )
  }
}
