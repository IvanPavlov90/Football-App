import { createAction, props } from '@ngrx/store';
import { LeagueResponse } from 'src/app/interfaces/league.interface';

export enum LeagueActions {
  LoadLeagues = '[League Component] Load Leagues',
  LoadLeaguesSuccess = '[League Component] Load Leagues Success',
}

export const loadLeagues = createAction(LeagueActions.LoadLeagues);

export const loadLeagueSuccess = createAction(
  LeagueActions.LoadLeaguesSuccess,
  props<{ leagues: Array<LeagueResponse> }>()
);