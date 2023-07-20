import { CategoryEnum } from '../Enuns/CategoryEnum';
import { CategoryQuestionEnum } from '../Enuns/CategoryQuestionEnum';

export interface IActive {
  id?: string;
  category: CategoryEnum;
  name: string;
  amount: number;
  currentValue: number;
  note: number;
  price: number;
  recommend: number;
  percentage: number;
}
