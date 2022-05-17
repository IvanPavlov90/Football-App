import { Component, OnInit } from '@angular/core';
import { League } from 'src/interfaces/interfaces';
import { LeagueService } from './service/league.service';

@Component({
  selector: 'leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

  constructor(private leagueService: LeagueService) { }

  leagues: Array<League> = []

  ngOnInit(): void {
    this.leagueService.getLeagues().subscribe({
      next: (value: any) => this.leagues = value.leagues,
    })
  }

}
