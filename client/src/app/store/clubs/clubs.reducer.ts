import { createReducer, on } from "@ngrx/store";
import { ClubResponse } from "src/app/interfaces/club.interface";
import { AddClubError, addClubSuccess } from "./club.actions";

const initialState: Array<ClubResponse> = [];

export const clubReducer = createReducer(
  initialState,
  on(addClubSuccess, (state, { club }) => [ ...state, club ]),
  on(AddClubError, (state) => [ ...state ]),
);