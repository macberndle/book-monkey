import { BookActions } from './book.actions';
import { reducer, initialState } from './book.reducer';

describe('Book Reducer', () => {

  it(`should enable the loading flag for loadBooks`, () => {
    const state = {
      books: [],
      loading: false
    };
    const action = BookActions.loadBooks();

    const newState = reducer(state, action);
    expect(newState.loading).toBe(true);
  })


  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
