import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { League } from 'src/interfaces/interfaces';
import { AdminService } from '../admin/service/admin.service';

@Component({
  selector: 'admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  @Input() formType: string | null = null;
  adminForm = new FormGroup({
    leagueName: new FormControl(''),
  });
  selectedFile: ArrayBuffer | null | string = '';

  async sendForm(e: any) {
    e.preventDefault();
    const league: League = {
      leagueName: this.adminForm.value.leagueName,
      image: this.selectedFile,
    }
    this.adminService.addLeague(league);
  }

  async changeFiles(e: any) {
    this.selectedFile = await this.convertToBase64(e.target.files[0]);
    console.log(this.selectedFile);
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
