import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';
import { BookListComponent } from './book-list.component';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';

fdescribe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BookListComponent,
        BookListItemComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it(`should trigger an event on click`, () => {
    let receivedBook: Book | undefined;
    component.selectBook.subscribe(book => {
      receivedBook = book;
    });

    fixture.nativeElement.querySelector('bm-book-list-item').click();
    expect(receivedBook?.title).toBe('Tierisch gut kochen');
  });

  it(`should trigger an event on clicking the thumbnail`, () => {
    let receivedBook: Book | undefined;
    component.selectBook.subscribe(book => {
      receivedBook = book;
    });

    fixture.nativeElement.querySelector('img').click();
    expect(receivedBook?.title).toBe('Tierisch gut kochen');
  });
});
