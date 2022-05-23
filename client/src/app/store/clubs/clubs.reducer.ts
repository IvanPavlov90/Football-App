import { createReducer, on } from "@ngrx/store";
import { ClubRequest } from "src/app/interfaces/club.interface";
import { AddClubError, addClubSuccess } from "./club.actions";

const initialState: Array<ClubRequest> = [];

export const clubReducer = createReducer(
  initialState,
  on(addClubSuccess, (state, { club }) => [ ...state, club ]),
  on(AddClubError, (state) => [ ...state ]),
);