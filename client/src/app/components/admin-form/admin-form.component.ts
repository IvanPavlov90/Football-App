import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addLeague } from 'src/app/store/leagues/leagues.actions';
import { LeagueRequest, LeagueResponse } from '../../interfaces/league.interface';

@Component({
  selector: 'admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ leagues: Array<LeagueResponse> }>
  ) { }

  @Input() formType: string | null = null;
  adminForm = this.formBuilder.group({
    leagueName: [''],
    image: [''],
  });
  selectedFile: string | null | ArrayBuffer = '';

  async sendForm(e: any) {
    e.preventDefault();
    const league: LeagueRequest = {
      leagueName: this.adminForm.value.leagueName,
      image: this.selectedFile,
    }
    this.store.dispatch(addLeague(league));
  }

  async changeFiles(e: any) {
    this.selectedFile = await this.convertToBase64(e.target.files[0]);
  }

  private async convertToBase64 (file: File): Promise<string | null | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      }
      reader.readAsDataURL(file);
    })
  }

  ngOnInit(): void {
  }

}
