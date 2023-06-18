import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryQuestionEnum } from 'src/app/shared/Enuns/CategoryQuestionEnum';
import { IQuestion } from 'src/app/shared/interfaces/IQuestion';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-question-category',
  templateUrl: './question-category.component.html',
  styleUrls: ['./question-category.component.scss'],
})
export class QuestionCategoryComponent implements OnInit {
  category: any = 'AN';
  questions: IQuestion[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.category = params['category'];
    });
  }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService
      .getQuestionsByCategory(this.category)
      .then((questions) => {
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
