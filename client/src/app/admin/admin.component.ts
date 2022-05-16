import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  form: string | null = null; 

  changeForm (value: string) {
    this.form = value;
  }

  ngOnInit(): void {
  }

}
