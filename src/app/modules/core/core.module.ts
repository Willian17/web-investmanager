import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ToastModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
  ],
})
export class CoreModule {}
