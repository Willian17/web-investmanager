import { Component, Input } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input()
  controlName: string = '';

  @Input()
  form: FormGroup = new FormGroup({});

  @Input()
  label: string = '';

  @Input()
  type: string = 'text';
}
