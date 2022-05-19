import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { LeagueService } from "src/app/services/LeagueService/league.service";
import { LeagueActions, loadLeagueSuccess } from "./leagues.actions";

@Injectable()
export class LeagueEffects {
  constructor(private actions$: Actions, private leagueService: LeagueService) { }

  loadLeagues$ = createEffect(
    () => this.actions$.pipe(
      ofType(LeagueActions.LoadLeagues),
      exhaustMap(() => this.leagueService.getLeagues().pipe(
        map(leagues => loadLeagueSuccess({ leagues })),
      ))  
    )
  )
}