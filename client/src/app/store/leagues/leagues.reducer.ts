import { createReducer, on } from "@ngrx/store";
import { LeagueResponse } from "src/app/interfaces/league.interface";
import { loadLeagueSuccess } from "./leagues.actions";

export const initialState: Array<LeagueResponse> = [];

export const leagueReducer = createReducer(
  initialState,
  on(loadLeagueSuccess, (state, { leagues }) => [ ...leagues ]),
);