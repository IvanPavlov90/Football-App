import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LeagueResponse } from 'src/interfaces/interfaces';
import { loadLeagueSuccess } from '../store/leagues/leagues.actions';
import { LeagueService } from './service/league.service';

@Component({
  selector: 'leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

  constructor(private leagueService: LeagueService, private store: Store<{ leagues: Array<LeagueResponse> }>) { 
    this.leagues$ = store.select('leagues');
  }

  leagues$: Observable<Array<LeagueResponse>>

  ngOnInit(): void {
    this.leagueService.getLeagues().subscribe({
      next: (value: Array<LeagueResponse>) => {
        this.store.dispatch(loadLeagueSuccess({ leagues: value }));
        console.log(this.leagues$);
      },
    })
  }

}
