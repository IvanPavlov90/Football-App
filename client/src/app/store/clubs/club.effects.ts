import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ClubRequest } from "src/app/interfaces/club.interface";
import { ClubService } from "src/app/services/ClubService/club.service";
import { NotificationsService } from "src/app/services/Notifications/notifications.service";
import { addClub, AddClubError, addClubSuccess } from "./club.actions";

@Injectable()
export class Clubeffects {
  constructor(
    private actions$: Actions,
    private _clubService: ClubService,
    private _notificationService: NotificationsService,
  ) { }

  addClub$ = createEffect(
    () => this.actions$.pipe(
      ofType(addClub),
      exhaustMap((newClub: ClubRequest) => this._clubService.addLeague(newClub).pipe(
        map(club => {
          this._notificationService.showNotification("Клуб был успешно добавлен", "done");
          return addClubSuccess({ club })
        }),
        catchError(() => {
          this._notificationService.showNotification("Не получилось добавить клуб", "error");
          return of(AddClubError())
        })
      ))
    )
  )
}