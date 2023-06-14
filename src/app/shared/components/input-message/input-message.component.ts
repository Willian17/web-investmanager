import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss'],
})
export class InputMessageComponent implements OnInit {
  @Input()
  form: FormGroup = new FormGroup({});

  @Input()
  controlName: string = '';

  text: string | undefined;

  constructor() {}
  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      const control = this.form.get(this.controlName) as FormControl;
      if (control?.invalid && control?.errors && control.dirty) {
        let message = '';

        if (control.errors['required']) {
          message = 'Campo obrigatório';
        } else if (control.errors['email']) {
          message = 'E-mail inválido';
        } else if (control.errors['minlength']) {
          const requiredLength = control.errors['minlength'].requiredLength;
          message = `Deve ter no mínimo ${requiredLength} caracteres`;
        } else if (control.errors['maxlength']) {
          message = `Deve ter no máximo ${control.errors['maxlength'].requiredLength} caracteres`;
        } else if (control.errors['min']) {
          message = `O valor mínimo é ${control.errors['min'].min}`;
        } else if (control.errors['max']) {
          message = `O valor máximo é ${control.errors['max'].max}`;
        } else if (control.errors['pattern']) {
          message = 'O formato é inválido';
        }
        this.text = message;
      } else {
        this.text = undefined;
      }
    });
  }
}
