import { createAction, props } from '@ngrx/store';
import { LeagueRequest, LeagueResponse } from 'src/app/interfaces/league.interface';

export enum LeagueActions {
  LoadLeagues = '[League] Load Leagues',
  LoadLeaguesSuccess = '[League] Load Leagues Success',
  LoadLeagueError = '[League] Load Leagues Error',
  AddLeague = '[League] Add League',
  AddLeagueSuccess = '[League] Add League Success',
  AddLeagueError = '[League] Add League Error',
}

export const loadLeagues = createAction(LeagueActions.LoadLeagues);

export const loadLeagueSuccess = createAction(
  LeagueActions.LoadLeaguesSuccess,
  props<{ leagues: Array<LeagueResponse> }>()
);

export const loadLeaguesError = createAction(LeagueActions.LoadLeagueError);

export const addLeague = createAction(
  LeagueActions.AddLeague,
  (league: LeagueRequest) => league
);

export const addLeagueSuccess = createAction(
  LeagueActions.AddLeagueSuccess,
  props<{ league: LeagueResponse }>()
);

export const AddLeagueError = createAction(LeagueActions.AddLeagueError);