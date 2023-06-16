import { Book } from '../shared/book';
import { BookListComponent } from './book-list.component';

fdescribe('BookListComponent', () => {
  let component: BookListComponent;

  beforeEach(async () => {
    component = new BookListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should hold a hardcoded list of 2 books`, () => {
    expect(component.books).toHaveSize(2);
  });

  it(`should trigger an event on 'doSelect'`, () => {
    const sentBook = {} as Book;
    let receivedBook: Book | undefined;
    component.selectBook.subscribe(book => {
      receivedBook = book;
    });

    component.doSelect(sentBook);
    expect(receivedBook).toBe(sentBook);
  });
});
