import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.scss']
})
export class SubmitBtnComponent implements OnInit {

  constructor() { }

  @Input() isDisabled: boolean = false;

  ngOnInit(): void {
  }

}
