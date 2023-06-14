import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMessageComponent } from './input-message/input-message.component';
import { CoreModule } from 'src/app/modules/core/core.module';

@NgModule({
  declarations: [InputMessageComponent],
  imports: [CommonModule, CoreModule],
  exports: [InputMessageComponent],
})
export class ComponentsModule {}
