import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, CoreModule],
})
export class AuthModule {}
