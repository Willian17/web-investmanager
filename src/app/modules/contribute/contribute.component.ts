import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryEnum } from 'src/app/shared/Enuns/CategoryEnum';
import { labelCategoryActive } from 'src/app/shared/constants/labelCategoryActive';
import { ICalculateProvideResponseDto } from 'src/app/shared/interfaces/dtos/ICalculateProvideResponseDto';
import { ActiveService } from 'src/app/shared/services/active.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss'],
})
export class ContributeComponent implements OnInit {
  activeForm: FormGroup = new FormGroup({});
  activesAmount: ICalculateProvideResponseDto[] = [];
  categoryEnum: typeof CategoryEnum = CategoryEnum;

  constructor(
    private formBuilder: FormBuilder,
    private activeService: ActiveService
  ) {}

  ngOnInit(): void {
    this.setFormContribute();
  }

  setFormContribute() {
    this.activeForm = this.formBuilder.group({
      amountValue: [null, [Validators.required]],
    });
  }

  async onSubmitCalculate() {
    const amountValue = this.activeForm.value.amountValue;
    this.getActives(amountValue);
  }

  getActives(amountValue: number) {
    this.activeService
      .calculateProvideActives({
        value: amountValue,
      })
      .then((response) => {
        this.activesAmount = response.map((active) => {
          if (
            active.category === CategoryEnum.CRIPTOMOEDA &&
            active.quantity &&
            active.quantity < 1
          ) {
            active.quantity = active.quantity.toPrecision(2) as any;
          }
          return {
            ...active,
          };
        });
      });
  }

  getLabelEnum(enu: CategoryEnum) {
    return labelCategoryActive[enu];
  }

  getClassBgLogo(category: CategoryEnum) {
    switch (category) {
      case CategoryEnum.RENDA_FIXA:
        return 'bg-orange-400';
      case CategoryEnum.CRIPTOMOEDA:
        return 'bg-red-400';
      default:
        return 'bg-primary';
    }
  }

  getSeverityTagCategory(category: CategoryEnum) {
    switch (category) {
      case CategoryEnum.ACOES_NACIONAIS:
        return 'primary';
      case CategoryEnum.ACOES_INTERNACIONAIS:
        return 'success';
      case CategoryEnum.FUNDOS_IMOBILIARIOS:
        return 'info';
      case CategoryEnum.RENDA_FIXA:
        return 'warning';
      case CategoryEnum.CRIPTOMOEDA:
        return 'danger';
      default:
        return 'primary';
    }
  }
}
