import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss'],
})
export class InputTextAreaComponent {
  @Input()
  controlName: string = '';

  @Input()
  form: FormGroup = new FormGroup({});

  @Input()
  label: string = '';
}
