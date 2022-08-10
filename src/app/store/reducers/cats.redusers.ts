import {
  createReducer,
  on,
} from '@ngrx/store';
import { Cat } from 'types';
import { loadCats } from '../actions/cats.actions';
import { initialState } from '../state/cats.state';

export const catsReducer = createReducer<Cat[]>(
  initialState,
  on(loadCats, (state, {cats }) => {
    return {
      ...state, cats,

    }
  })
);
