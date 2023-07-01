import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { BookEffects } from './book.effects';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { book } from './test-helper';
import { BookActions } from './book.actions';
import { Action } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { initialState } from './book.reducer';

describe('BookEffects', () => {
  let actions$: Observable<any>;
  let effects: BookEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: { book: initialState}
        }),
        { provide: BookStoreService, useValue: { getAll: () => of([])}}
      ]
    });

    effects = TestBed.inject(BookEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it(`should fire loadBooksSuccess for loadBooks`, () => {
    const books = [book(1), book(2), book(3)];

    // Implementierung von getAll() ersetzen
    const bs = TestBed.inject(BookStoreService);
    spyOn(bs, 'getAll').and.callFake(() => of(books));

    // Action auslösen
    actions$ = of(BookActions.loadBooks())

    // Actions aus Effekt empfangen
    let dispatchedAction: Action | undefined;
    effects.loadBooks$.subscribe(action => {
      dispatchedAction = action;
    });

    // Action vergleichen
    const expectedAction = BookActions.loadBooksSuccess({ data: books });
    expect(dispatchedAction).toEqual(expectedAction);

    // Serviceaufruf prüfen
    expect(bs.getAll).toHaveBeenCalled();
  });

  it(`should fire loadBooksSucces for loadBooks (jasmine-marbles)`, () => {
    const books = [book(1), book(2), book(3)];
    const bs = TestBed.inject(BookStoreService);
    spyOn(bs, 'getAll').and.callFake(() => of(books));

    actions$ = hot('--a', { a: BookActions.loadBooks() });
    const expected = cold('--b', { b: BookActions.loadBooksSuccess( { data: books })});

    expect(effects.loadBooks$).toBeObservable(expected);
    expect(bs.getAll).toHaveBeenCalled();
  });

  it(`should do nothing if store is already filled`, () => {
    const store = TestBed.inject(MockStore);
    store.setState({
      book: {
        books: [book(1)],
        loading: false
      }
    });

    actions$ = hot('--a', { a: BookActions.loadBooks() });
    const expected = cold('---');

    expect(effects.loadBooks$).toBeObservable(expected);
  })
});
