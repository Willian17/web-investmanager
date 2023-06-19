import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMessageComponent } from './input-message/input-message.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';

@NgModule({
  declarations: [
    InputMessageComponent,
    InputTextComponent,
    InputTextAreaComponent,
  ],
  imports: [CommonModule, CoreModule],
  exports: [InputMessageComponent, InputTextComponent, InputTextAreaComponent],
})
export class ComponentsModule {}
