import { createAction, props } from '@ngrx/store';
import { Cat } from '../../../../types';

export enum CatsActions {
  GetCats = '[cats] Set Cats',
  setCount = '[count] Set Count',
}

export const loadCats = createAction(
  CatsActions.GetCats,
  props<{ cats: Cat[] }>()
);
