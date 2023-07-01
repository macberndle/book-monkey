import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectAllBooks, selectBooksLoading } from '../store/book.selectors';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectBooksLoading, value: true},
            { selector: selectAllBooks, value: []}
          ]
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should show a loading text`, () => {
    const element = fixture.nativeElement;
    expect(element.querySelector('.loader').textContent).toBe('Loading ...');
  })
});
