import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubRequest, ClubResponse } from 'src/app/interfaces/club.interface';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private _http: HttpClient) { }

  private _ADD_CLUB_URL = 'http://localhost:3000/api/club/add';

  addLeague(club: ClubRequest): Observable<ClubResponse> {
    return this._http.post<ClubResponse>(this._ADD_CLUB_URL, JSON.stringify(club), {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }
}
