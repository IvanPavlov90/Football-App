import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  constructor() { }

  @Input() form: string | null = null;

  ngOnInit(): void {
  }

}
