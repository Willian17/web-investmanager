import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivesComponent } from './actives.component';
import { CoreModule } from '../core/core.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ActiveComponent } from './active/active.component';

@NgModule({
  declarations: [ActivesComponent, ActiveComponent],
  imports: [CommonModule, CoreModule, ComponentsModule],
})
export class ActivesModule {}
