import { CategoryEnum } from '../../Enuns/CategoryEnum';

export interface ICalculateProvideResponseDto {
  id: string;
  category: CategoryEnum;
  name: string;
  amount: string;
  currentValue: number;
  note: number;
  price: number;
  markPercentage: number;
  markValue: number;
  contributionAmount: number;
  quantity: number;
}
