import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs";
import { LeagueService } from "src/app/leagues/service/league.service";
import { EMPTY } from 'rxjs';

@Injectable()
export class LeagueEffects {
  constructor(private actions$: Actions, private leagueService: LeagueService) { }

  loadLeagues$ = createEffect(() => this.actions$.pipe(
    ofType('[League Component] Load Leagues'),
    mergeMap(() => this.leagueService.getLeagues()
      .pipe(
        map(league => ({ type: '[League Component] Load Leagues Success', payload: league })),
        catchError(() => EMPTY)
      ))
    )
  )
}