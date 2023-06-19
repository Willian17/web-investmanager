import { Component, OnInit } from '@angular/core';
import { CategoryQuestionEnum } from 'src/app/shared/Enuns/CategoryQuestionEnum';
import { IQuestion } from 'src/app/shared/interfaces/IQuestion';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions: IQuestion[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.get().then((questions) => {
      this.questions = questions;
    });
  }

  getLabelEnum(enu: CategoryQuestionEnum) {
    const schema = {
      [CategoryQuestionEnum.ACOES_NACIONAIS]: 'Ações Nacionais',
      [CategoryQuestionEnum.ACOES_INTERNACIONAIS]: 'Ações Internacionais',
      [CategoryQuestionEnum.FUNDOS_IMOBILIARIOS]: 'Fundos Imobiliários',
      [CategoryQuestionEnum.REITS]: 'REITs',
    };
    return schema[enu];
  }

  getSeverityTagCategory(index: number) {
    switch (index) {
      case 0:
        return 'primary';
      case 1:
        return 'success';
      case 2:
        return 'info';
      case 3:
        return 'warning';
      default:
        return 'danger';
    }
  }
}
