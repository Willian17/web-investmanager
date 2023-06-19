import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  showDialogForm = false;
  questionForm: FormGroup = new FormGroup({});
  questionEdit: IQuestion = undefined as any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.category = params['category'];
    });
  }

  ngOnInit(): void {
    this.getQuestions();
    this.questionForm = this.formBuilder.group({
      question: ['', [Validators.required]],
      criterion: ['', [Validators.required]],
    });
  }

  handleBack() {
    this.router.navigate(['/questions']);
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

  handleShowDialogForm(question?: IQuestion) {
    this.showDialogForm = true;
    this.questionEdit = question as IQuestion;
    this.setValuesForm(question);
  }

  setValuesForm(question?: IQuestion) {
    this.questionForm.controls['question'].setValue(question?.question || '');
    this.questionForm.controls['criterion'].setValue(question?.criterion || '');
  }

  async handleSubmit() {
    if (this.questionEdit) {
      await this.questionService.update(
        {
          ...this.questionForm.value,
          category: this.category,
        },
        this.questionEdit.id as string
      );
    } else {
      await this.questionService.create({
        ...this.questionForm.value,
        category: this.category,
      });
    }

    this.getQuestions();
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: `Questão ${
        this.questionEdit ? 'editada' : 'cadastrada'
      } com sucesso`,
    });
    this.resetValues();
  }

  resetValues() {
    this.showDialogForm = false;
    this.questionForm.reset();
    this.questionEdit = undefined as any;
  }

  async handleDelete(question: IQuestion, event: Event) {
    const accept = await this.questionService.delete(
      question.id as string,
      event
    );
    if (accept) {
      this.getQuestions();
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: `Questão deletada com sucesso`,
      });
    }
  }
}
