import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LeagueRequest } from '../../interfaces/league.interface';
import { LeagueService } from '../../services/LeagueService/league.service';

@Component({
  selector: 'admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  constructor(private leagueService: LeagueService, private formBuilder: FormBuilder) { }

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
    this.leagueService.addLeague(league);
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
