import { createAction, props } from '@ngrx/store';
import { LeagueResponse } from 'src/interfaces/interfaces';

export enum LeagueActions {
  LoadLeagues = '[League Component] Load Leagues',
  LoadLeaguesSuccess = '[League Component] Load Leagues Success',
}

interface Action {
  type: string;
  leagues : Array<LeagueResponse>
}

export const loadLeagueSuccess = createAction(
  '[League] Load Leagues Success',
  props<{ leagues: Array<LeagueResponse> }>()
);