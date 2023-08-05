import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MarksComponent } from './marks.component';

@NgModule({
  declarations: [
    MarksComponent
  ],
  imports: [CommonModule, CoreModule, ComponentsModule],
})
export class MarksModule {}
