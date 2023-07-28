import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoryEnum } from 'src/app/shared/Enuns/CategoryEnum';
import { labelCategoryActive } from 'src/app/shared/constants/labelCategoryActive';
import { IActive } from 'src/app/shared/interfaces/IActive';
import { ActiveService } from 'src/app/shared/services/active.service';

@Component({
  selector: 'app-actives',
  templateUrl: './actives.component.html',
  styleUrls: ['./actives.component.scss'],
})
export class ActivesComponent implements OnInit {
  actives: IActive[] = [];

  constructor(
    private activeService: ActiveService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getActives();
  }

  getActives() {
    this.activeService.get().then((actives) => {
      this.actives = actives.map((active) => {
        return {
          ...active,
          percentage: active.percentage.toFixed(2) as any,
          categoryLabel: this.getLabelEnum(active.category),
          severityTagCategory: this.getSeverityTagCategory(active.category),
        };
      });
    });
  }

  getLabelEnum(enu: CategoryEnum) {
    return labelCategoryActive[enu];
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

  async handleDelete(question: IActive, event: Event) {
    const accept = await this.activeService.delete(
      question.id as string,
      event
    );
    if (accept) {
      this.getActives();
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: `Ativo deletado com sucesso`,
      });
    }
  }
}
