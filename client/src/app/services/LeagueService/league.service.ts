import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeagueRequest, LeagueResponse } from '../../interfaces/league.interface';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http: HttpClient) { }

  private GET_LEAGUES_URL = 'http://localhost:3000/api/leagues';
  private ADD_LEAGUE_URL = 'http://localhost:3000/api/admin/league/add';

  async addLeague(league: LeagueRequest) {
    /*return this.http.post( this.ADD_LEAGUE_URL, JSON.stringify(data), { headers: new HttpHeaders({ "Content-Type": "application/json" })} );*/
    const response = await fetch(this.ADD_LEAGUE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(league),
    }); 
    console.log(await response.json());
  }

  getLeagues() {
    return this.http.get<Array<LeagueResponse>>(this.GET_LEAGUES_URL);
  }
}
