import { createReducer, on } from '@ngrx/store';
import { loadCats } from '../actions/cats.actions';
import { initialState, State } from '../state/cats.state';

export const catsReducer = createReducer<State>(
  initialState,
  on(loadCats, (state, { cats }) => ({ ...state, cats })),
);
