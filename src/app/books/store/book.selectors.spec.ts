import { selectAllBooks, selectBooksLoading } from './book.selectors';
import { book } from './test-helper';

describe('Book Selectors', () => {

  it(`should select all books`, () => {
    const books = [book(1), book(2), book(3)];
    const state = {
      book: { books, loading: false }
    };

    const result = selectAllBooks(state);
    expect(result).toEqual(books);
  });

  it(`should select all books (projector)`, () => {
    const books = [book(1), book(2), book(3)];
    const bookState = { books, loading: false };

    const result = selectAllBooks.projector(bookState);
    expect(result).toEqual(books);
  });

  it(`should select loading`, () => {
    const books = [book(1), book(2), book(3)];
    const bookState = { books, loading: false };

    const result = selectBooksLoading.projector(bookState);
    expect(result).toBeFalse();
  })
});
