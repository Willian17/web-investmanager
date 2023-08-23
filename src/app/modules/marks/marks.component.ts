import { Component, OnInit, forwardRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoryEnum } from 'src/app/shared/Enuns/CategoryEnum';
import { labelCategoryActive } from 'src/app/shared/constants/labelCategoryActive';
import { IMark } from 'src/app/shared/interfaces/IMark';
import { MarkService } from 'src/app/shared/services/mark.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss'],
})
export class MarksComponent implements OnInit {
  marks: IMark[] = [];
  constructor(
    private markService: MarkService,
    private messageService: MessageService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getMarks();
  }

  async getMarks() {
    const marks = await this.markService.get();
    this.marks = marks.map((mark) => {
      return {
        ...mark,
        label: this.getLabelEnum(mark.category),
      };
    });
  }

  getLabelEnum(enu: CategoryEnum) {
    return labelCategoryActive[enu];
  }

  async handleSubmit() {
    const body = this.marks.map((mark) => {
      return {
        id: mark.id,
        percentage: mark.percentage,
        category: mark.category,
      }
    })
    await this.markService.updateMark(body);
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: `Metas atualizada com sucesso`,
    });
    await this.getMarks();
  }
}
