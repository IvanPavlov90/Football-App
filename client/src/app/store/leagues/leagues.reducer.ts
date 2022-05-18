import { createReducer, on } from "@ngrx/store";
import { LeagueResponse } from "src/interfaces/interfaces";
import { loadLeagueSuccess } from "./leagues.actions";

export const initialState: Array<LeagueResponse> = [];

export const leagueReducer = createReducer(
  initialState,
  on(loadLeagueSuccess, (state, { leagues }) => [ ...leagues ]),
);