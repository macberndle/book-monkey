import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

// import { BookListItemComponent } from './book-list-item.component';
// import { Book } from 'src/app/shared/book';
// import { Location } from '@angular/common';
// import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `<h1>{{ greeting }}</h1>`,
})
export class MyComponent {
  greeting = 'Hello World!';

  constructor() {
    setTimeout(() => (this.greeting = 'Hello Angular!'), 1000);
  }
}

fdescribe('BookListItemComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should show text 'Hello World!' at start`, () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toEqual('Hello World!')
  });

  it(`should show the text 'Hello Angular!' after one second`, waitForAsync(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toEqual('Hello Angular!')
    });
  }));

  it(`should show the text 'Hello Angular!' after one second`, async () => {
    await fixture.whenStable();
    fixture.detectChanges();

    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toEqual('Hello Angular!')
  });

  // let component: BookListItemComponent;
  // let fixture: ComponentFixture<BookListItemComponent>;
  // let location: Location;

  // const book: Book = {
  //   isbn: '111',
  //   title: 'Buch 1',
  //   authors: [],
  //   thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png',
  // };

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [BookListItemComponent],
  //     imports: [
  //       RouterTestingModule.withRoutes([{ path: ':isbn', children: [] }]),
  //     ],
  //   }).compileComponents();

  //   location = TestBed.inject(Location);
  //   fixture = TestBed.createComponent(BookListItemComponent);
  //   component = fixture.componentInstance;
  //   component.book = book;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it(`should navigate to details page by ISBN`, async () => {
  //   fixture.nativeElement.querySelector('img').click();
  //   await fixture.whenStable();
  //   expect(location.path()).toEqual('/111');
  // });
});
