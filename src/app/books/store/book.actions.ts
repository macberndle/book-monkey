import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from 'src/app/shared/book';

export const BookActions = createActionGroup({
  source: 'Book',
  events: {
    'Load Books': emptyProps(),
    'Load Books Success': props<{ data: Book[] }>(),
    'Load Books Failure': props<{ error: string }>(),
  }
});

// export const loadBooks = createAction(
//   '[Book] Load Books'
// )

// export const loadBooksSuccess = createAction(
//   '[Book] Load Books Success',
//   props<{data: Book[]}>
// )

// export const loadBooksFailure = createAction(
//   '[Book] Load Books Failure',
//   props<{error: string}>
// )
