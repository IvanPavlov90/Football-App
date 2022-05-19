import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LeagueResponse } from '../../interfaces/league.interface';
import { loadLeagues } from '../../store/leagues/leagues.actions';

@Component({
  selector: 'leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

  constructor(private store: Store<{ leagues: Array<LeagueResponse> }>) { 
    this.leagues$ = store.select('leagues');
  }

  leagues$: Observable<Array<LeagueResponse>>

  ngOnInit(): void {
    this.store.dispatch(loadLeagues());
  }

}
