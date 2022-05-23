import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'info-input',
  templateUrl: './info-input.component.html',
  styleUrls: ['./info-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InfoInputComponent),
    multi: true
  }]
})
export class InfoInputComponent implements ControlValueAccessor {

  constructor() { }

  @Input() type: string = '';
  public value: string = '';
  public changed = (value: string) : void => {};
  public touched = () : void => {};
  public isDisabled: boolean = false;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.changed = fn;
  }

  onChange (event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  registerOnTouched(fn: any) {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

}
