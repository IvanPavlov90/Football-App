import { createAction, props } from '@ngrx/store';
import { LeagueRequest, LeagueResponse } from 'src/app/interfaces/league.interface';

export enum LeagueActions {
  LoadLeagues = '[League Component] Load Leagues',
  LoadLeaguesSuccess = '[League Component] Load Leagues Success',
  LoadLeagueError = '[League Component] Load Leagues Error',
  AddLeague = '[League Component] Add League',
  AddLeagueSuccess = '[League Component] Add League Success',
  AddLeagueError = '[League Component] Add League Error',
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
  LeagueActions.AddLeague,
  props<{ league: LeagueResponse }>()
);

export const AddLeagueError = createAction(LeagueActions.AddLeagueError);