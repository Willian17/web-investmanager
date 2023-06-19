import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { CoreModule } from '../core/core.module';
import { QuestionCategoryComponent } from './question-category/question-category.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [QuestionsComponent, QuestionCategoryComponent],
  imports: [CommonModule, CoreModule, ComponentsModule],
})
export class QuestionsModule {}
