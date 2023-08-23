import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { CategoryEnum } from 'src/app/shared/Enuns/CategoryEnum';
import { labelCategoryActive } from 'src/app/shared/constants/labelCategoryActive';
import { IActive } from 'src/app/shared/interfaces/IActive';
import { IQuestion } from 'src/app/shared/interfaces/IQuestion';
import { ActiveService } from 'src/app/shared/services/active.service';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss'],
})
export class ActiveComponent implements OnInit {
  active: IActive = {} as IActive;
  activeForm: FormGroup = new FormGroup({});
  optionsCategory: SelectItem[] = [];
  filteredNames: string[] = [];
  questions: IQuestion[] = [];

  categoryEnum: typeof CategoryEnum = CategoryEnum;

  @Input('id') idActive: string = null as any;

  constructor(
    private formBuilder: FormBuilder,
    private activeService: ActiveService,
    private questionService: QuestionService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.optionsCategory = Object.keys(labelCategoryActive).map((key) => {
      return {
        label: labelCategoryActive[key as CategoryEnum],
        value: key,
      };
    });
  }

  ngOnInit(): void {
    this.getActiveById();
    this.setFormActive();
    this.getQuestions(this.optionsCategory[0].value);
    this.registerFilterName();
    this.registerChangeCategory();
  }

  getActiveById() {
    if (this.idActive) {
      this.activeService.getById(this.idActive).then((res) => {
        this.active = res;
        this.setFormActive(res);
        this.getQuestions(res.category);
      });
    }
  }

  setFormActive(active?: IActive) {
    this.activeForm = this.formBuilder.group({
      name: [active?.name || '', [Validators.required]],
      category: [
        this.optionsCategory.find((item) => item.value === active?.category) ||
          this.optionsCategory[0],
        [Validators.required],
      ],
      amount: [active?.amount || 0, [Validators.required]],
      currentValue: [active?.currentValue || null],
      note: [active?.note || null],
    });
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
        const answer = this.active.answers?.find(
          (active) => active.idQuestion === question.id
        );
        return {
          ...question,
          response: answer?.response || false,
          idQuestion: question.id,
          id: answer?.id,
        };
      });
    });
  }
  async handleSubmit() {
    const answers = this.questions.map((question) => {
      return {
        idQuestion: question.idQuestion,
        response: question.response,
        id: question.id,
      };
    });
    const body = {
      ...this.activeForm.value,
      amount: +this.activeForm.get('amount')?.value,
      category: this.activeForm.get('category')?.value?.value,
      answers,
    };

    if (this.idActive) {
      this.activeService.update(body, this.idActive).then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Ativo editado com sucesso',
        });
      });
      this.router.navigate(['/actives']);
    } else {
      this.activeService.create(body).then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Ativo cadastrado com sucesso',
        });
      });
      this.router.navigate(['/actives']);
    }
  }
}
