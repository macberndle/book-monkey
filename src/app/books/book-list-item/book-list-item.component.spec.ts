import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { BookListItemComponent } from './book-list-item.component';
import { Book } from 'src/app/shared/book';
import { Location } from '@angular/common';

describe('BookListItemComponent', () => {
  let component: BookListItemComponent;
  let fixture: ComponentFixture<BookListItemComponent>;
  let location: Location;

  const testBook: Book = {
    isbn: '111',
    title: 'Book 1',
    authors: [],
    thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: ':isbn', children: []}
        ])
      ]
    }).compileComponents();

    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(BookListItemComponent);
    component = fixture.componentInstance;
    component.book = testBook;
    fixture.detectChanges();
  });

  it(`should create`, () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate to details page by ISBN`, async () => {
    fixture.nativeElement.querySelector('img').click();
    await fixture.whenStable();
    expect(location.path()).toEqual('/111');
  })
});
