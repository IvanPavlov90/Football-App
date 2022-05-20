import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueRequest, LeagueResponse } from '../../interfaces/league.interface';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private _http: HttpClient) { }

  private _GET_LEAGUES_URL = 'http://localhost:3000/api/leagues';
  private _ADD_LEAGUE_URL = 'http://localhost:3000/api/league/add';

  addLeague(league: LeagueRequest): Observable<LeagueResponse> {
    return this._http.post<LeagueResponse>(this._ADD_LEAGUE_URL, JSON.stringify(league), {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }

  getLeagues(): Observable<Array<LeagueResponse>> {
    return this._http.get<Array<LeagueResponse>>(this._GET_LEAGUES_URL);
  }
}
