import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeagueRequest } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private ADD_LEAGUE_URL = 'http://localhost:3000/api/admin/league';

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
}
