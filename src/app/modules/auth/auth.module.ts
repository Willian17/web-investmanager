import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { CoreModule } from '../core/core.module';
import { SignupComponent } from './signup/signup.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [CommonModule, CoreModule, ComponentsModule],
})
export class AuthModule {}
