import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, InputTextModule, InputMaskModule],
  exports: [ButtonModule, InputTextModule, InputMaskModule],
})
export class CoreModule {}
