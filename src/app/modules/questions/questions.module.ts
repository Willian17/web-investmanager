import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule, CoreModule],
})
export class QuestionsModule {}
