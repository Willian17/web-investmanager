import { CategoryEnum } from '../Enuns/CategoryEnum';
import { CategoryQuestionEnum } from '../Enuns/CategoryQuestionEnum';
import { IQuestion } from './IQuestion';

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
  answers: IQuestion[];
}
