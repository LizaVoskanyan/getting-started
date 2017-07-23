import {Component, EventEmitter, forwardRef, Input, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true // TODO
};

@Component({
  selector: 'nb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [CONTROL_VALUE_ACCESSOR]
})
export class CheckboxComponent implements ControlValueAccessor {
  private _value: boolean;

  @Input()
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;

    this.change.emit(value);
  }

  @Input()
  disabled = false;

  change = new EventEmitter<boolean>();

  private _touched = false;
  touch = new EventEmitter();

  constructor() { }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.change.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.touch.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onBlur() {
    if (this._touched) {
      return;
    }

    this._touched = true;
    this.touch.emit();
  }

}
