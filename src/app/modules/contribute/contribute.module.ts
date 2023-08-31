import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributeComponent } from './contribute.component';
import { CoreModule } from '../core/core.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [ContributeComponent],
  imports: [CommonModule, CoreModule, ComponentsModule],
})
export class ContributeModule {}
