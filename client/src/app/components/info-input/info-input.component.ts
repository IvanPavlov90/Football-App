import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-input',
  templateUrl: './info-input.component.html',
  styleUrls: ['./info-input.component.scss']
})
export class InfoInputComponent implements OnInit {

  constructor() { }

  @Input() type: string = '';

  ngOnInit(): void {
  }

}
