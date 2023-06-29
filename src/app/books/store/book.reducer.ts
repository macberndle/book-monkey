import { createFeature, createReducer, on } from '@ngrx/store';
import { BookActions } from './book.actions';
import { Book } from 'src/app/shared/book';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(BookActions.loadBooks, (state): State => {
    return { ...state, loading: true };
  }),
  on(BookActions.loadBooksSuccess, (state, action): State => {
    return {
      ...state,
      books: action.data,
      loading: false
    };
  }),
  on(BookActions.loadBooksFailure, (state, action): State => {
    return { ...state, loading: false };
  }),
);

export const bookFeature = createFeature({
  name: bookFeatureKey,
  reducer,
});

