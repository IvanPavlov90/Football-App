import { createReducer, on } from "@ngrx/store";
import { LeagueResponse } from "src/app/interfaces/league.interface";
import { AddLeagueError, addLeagueSuccess, loadLeaguesError, loadLeagueSuccess } from "./leagues.actions";

export const initialState: Array<LeagueResponse> = [];

export const leagueReducer = createReducer(
  initialState,
  on(loadLeagueSuccess, (state, { leagues }) => [ ...leagues ]),
  on(loadLeaguesError, (state) => [ ...state ]),
  on(addLeagueSuccess, (state, { league }) => [ ...state, league ]),
  on(AddLeagueError, (state) => [ ...state ]),
);