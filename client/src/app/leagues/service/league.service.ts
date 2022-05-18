import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeagueResponse } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http: HttpClient) { }

  private GET_LEAGUES_URL = 'http://localhost:3000/api/leagues';

  getLeagues() {
    return this.http.get<Array<LeagueResponse>>(this.GET_LEAGUES_URL);
  }
}
