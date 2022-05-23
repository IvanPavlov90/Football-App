import { ActionReducerMap } from "@ngrx/store";
import { ClubResponse } from "../interfaces/club.interface";
import { LeagueResponse } from "../interfaces/league.interface";
import { clubReducer } from "./clubs/clubs.reducer";
import { leagueReducer } from "./leagues/leagues.reducer";

export interface State {
  leagues: Array<LeagueResponse>;
  clubs: Array<ClubResponse>;
}

export const reducers: ActionReducerMap<State> = {
  leagues: leagueReducer,
  clubs: clubReducer,
};