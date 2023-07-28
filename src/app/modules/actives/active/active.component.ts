import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  skip,
  skipWhile,
  switchMap,
} from 'rxjs';
import { CategoryEnum } from 'src/app/shared/Enuns/CategoryEnum';
import { labelCategoryActive } from 'src/app/shared/constants/labelCategoryActive';
import { IQuestion } from 'src/app/shared/interfaces/IQuestion';
import { ActiveService } from 'src/app/shared/services/active.service';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss'],
})
export class ActiveComponent implements OnInit {
  activeForm: FormGroup = new FormGroup({});
  idActive: string = '';
  optionsCategory: SelectItem[] = [];
  filteredNames: string[] = [];
  questions: IQuestion[] = [];

  categoryEnum: typeof CategoryEnum = CategoryEnum;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private activeService: ActiveService,
    private questionService: QuestionService,
    private messageService: MessageService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.idActive = params['id'];
    });
    this.optionsCategory = Object.keys(labelCategoryActive).map((key) => {
      return {
        label: labelCategoryActive[key as CategoryEnum],
        value: key,
      };
    });
  }

  ngOnInit(): void {
    this.activeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: [this.optionsCategory[0], [Validators.required]],
      amount: [0, [Validators.required]],
      currentValue: [null],
      note: [null],
    });
    this.getQuestions(this.optionsCategory[0].value);
    this.registerFilterName();
    this.registerChangeCategory();
  }

  registerFilterName() {
    this.activeForm
      .get('name')
      ?.valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged((curr, prev) => {
          return curr.toLowerCase() === prev.toLowerCase();
        }),
        switchMap((text) => {
          const category = this.activeForm.get('category')?.value?.value;
          console.log(category);
          return this.activeService.searchTicket(category, text);
        })
      )
      .subscribe((res) => {
        this.filteredNames = res.tickers;
      });
  }

  registerChangeCategory() {
    this.activeForm
      .get('category')
      ?.valueChanges.pipe(
        filter((category) => {
          return (
            category.value !== CategoryEnum.RENDA_FIXA &&
            category.value !== CategoryEnum.CRIPTOMOEDA
          );
        }),
        distinctUntilChanged((curr, prev) => {
          return curr.value.toLowerCase() === prev.value.toLowerCase();
        })
      )
      .subscribe((category) => {
        if (category.value) {
          this.getQuestions(category.value);
        }
      });
  }
  getQuestions(category: CategoryEnum) {
    this.questionService.getQuestionsByCategory(category).then((questions) => {
      this.questions = questions.map((question) => {
        return {
          ...question,
          response: false,
        };
      });
    });
  }
  async handleSubmit() {
    const answers = this.questions.map((question) => {
      return {
        idQuestion: question.id,
        response: question.response,
      };
    });
    const body = {
      ...this.activeForm.value,
      amount: +this.activeForm.get('amount')?.value,
      category: this.activeForm.get('category')?.value?.value,
      answers,
    };

    this.activeService.create(body).then((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Ativo cadastrado com sucesso',
      });
    });
  }
}
