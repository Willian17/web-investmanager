import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMessageComponent } from './input-message/input-message.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  declarations: [InputMessageComponent, InputTextComponent],
  imports: [CommonModule, CoreModule],
  exports: [InputMessageComponent, InputTextComponent],
})
export class ComponentsModule {}
