import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BookActions } from './book.actions';
import { BookStoreService } from 'src/app/shared/book-store.service';


@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks),
      switchMap(() =>
        this.service.getAll().pipe(
          map(data => BookActions.loadBooksSuccess({data})),
          catchError(error => of(BookActions.loadBooksFailure({error: error.message })))
        ))
    );
  });


  constructor(
    private actions$: Actions,
    private service: BookStoreService
  ) {}
}
