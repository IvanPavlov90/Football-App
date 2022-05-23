import { createAction, props } from "@ngrx/store";
import { ClubRequest, ClubResponse } from "src/app/interfaces/club.interface";

export enum ClubActions {
  AddClub = '[Club] Add Club',
  AddClubSuccess = '[Club] Add Club Success',
  AddClubError = '[Club] Add Club Error',
}

export const addClub = createAction(
  ClubActions.AddClub,
  (club: ClubRequest) => club,
);

export const addClubSuccess = createAction(
  ClubActions.AddClubSuccess,
  props<{ club: ClubResponse }>()
);

export const AddClubError = createAction(ClubActions.AddClubError);