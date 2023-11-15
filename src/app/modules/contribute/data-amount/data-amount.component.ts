import { Component, Input } from '@angular/core';
import { ICalculateProvideResponseDto } from 'src/app/shared/interfaces/dtos/ICalculateProvideResponseDto';

@Component({
  selector: 'app-data-amount',
  templateUrl: './data-amount.component.html',
  styleUrls: ['./data-amount.component.scss'],
})
export class DataAmountComponent {
  @Input()
  amount: ICalculateProvideResponseDto = {} as ICalculateProvideResponseDto;
}
