import { createAction, props } from '@ngrx/store';
import { Cat } from '../../../../types';

export enum CatsActions {
  GetCats = '[cats] Get Cats',
}


export const loadCats = createAction(
  CatsActions.GetCats,
  props<{ cats: Cat[] }>()
);
