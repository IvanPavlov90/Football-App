import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'league-item',
  templateUrl: './league-item.component.html',
  styleUrls: ['./league-item.component.scss']
})
export class LeagueItemComponent implements OnInit {

  constructor() { }

  @Input() leagueName: string | null = null;
  @Input() image: string = '';

  ngOnInit(): void {
  }

}
