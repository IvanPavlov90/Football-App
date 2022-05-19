import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { LeagueRequest } from "src/app/interfaces/league.interface";
import { LeagueService } from "src/app/services/LeagueService/league.service";
import { NotificationsService } from "src/app/services/Notifications/notifications.service";
import { addLeague, AddLeagueError, addLeagueSuccess, loadLeagues, loadLeaguesError, loadLeagueSuccess } from "./leagues.actions";

@Injectable()
export class LeagueEffects {
  constructor(
    private actions$: Actions, 
    private _leagueService: LeagueService,
    private _notificationService: NotificationsService,
  ) { }

  loadLeagues$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadLeagues),
      exhaustMap(() => this._leagueService.getLeagues().pipe(
        map(leagues => loadLeagueSuccess({ leagues })),
        catchError(() => of(loadLeaguesError()))
      ))  
    )
  )

  addLeague$ = createEffect(
    () => this.actions$.pipe(
      ofType(addLeague),
      exhaustMap((newLeague: LeagueRequest) => this._leagueService.addLeague(newLeague).pipe(
        map(league => {
          this._notificationService.showNotification("Чемпионат был успешно добавлен", "done");
          return addLeagueSuccess({ league })
        }),
        catchError(() => {
          this._notificationService.showNotification("Не получилось добавить чемпионат", "error");
          return of(AddLeagueError())
        })
      ))
    ) 
  )
}