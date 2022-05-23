import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClubRequest } from 'src/app/interfaces/club.interface';
import { addClub } from 'src/app/store/clubs/club.actions';
import { addLeague, loadLeagues } from 'src/app/store/leagues/leagues.actions';
import { LeagueRequest, LeagueResponse } from '../../interfaces/league.interface';

@Component({
  selector: 'admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store<{ leagues: Array<LeagueResponse> }>
  ) { 
    this.leagues$ = _store.select('leagues');
  }

  @Input() formType: string | null = null;
  adminForm = this._formBuilder.group({
    leagueName: [''],
    leagueId: [''],
    clubName: [''],
    f_year: [''],
    city: [''],
    stadium: [''],
    history: ['']
  });
  selectedFile: string | null | ArrayBuffer = '';
  leagues$: Observable<Array<LeagueResponse>>;

  async sendForm(e: any) {
    e.preventDefault();
    switch(this.formType) {
      case 'league':
        const league: LeagueRequest = {
          leagueName: this.adminForm.value.leagueName,
          image: this.selectedFile,
        }
        this._store.dispatch(addLeague(league));
        this.clearForm();
        break;
      case 'club':
        const club: ClubRequest = {
          _leagueId: this.adminForm.value.leagueId,
          clubName: this.adminForm.value.clubName,
          image: this.selectedFile,
          f_year: this.adminForm.value.f_year,
          city: this.adminForm.value.city,
          stadium: this.adminForm.value.stadium,
          history: this.adminForm.value.history,
        }
        this._store.dispatch(addClub(club));
        break;
      default: 
        break;
    }
  }

  private clearForm(): void {
    this.adminForm.value.leagueName = '';
    this.adminForm.value.image = '';
  }

  public fileUpload(fileName: string | null | ArrayBuffer ) {
    this.selectedFile = fileName;
  }

  ngOnInit(): void {
    this._store.dispatch(loadLeagues());
  }

}
