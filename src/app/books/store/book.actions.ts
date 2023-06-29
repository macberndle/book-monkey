import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/shared/book';

// export const BookActions = createActionGroup({
//   source: 'Book',
//   events: {
//     '[Book] Load Books': emptyProps(),
//     'Load Books Success': props<{ data: Book[] }>(),
//     'Load Books Failure': props<{ error: string }>(),
//   }
// });

export const loadBooks = createAction(
  '[Book] Load Books'
)

export const loodBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{data: Book[]}>
)

export const loodBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{error: string}>
)
