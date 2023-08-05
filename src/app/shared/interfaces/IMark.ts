import { CategoryEnum } from '../Enuns/CategoryEnum';

export interface IMark {
  id?: string;
  category: CategoryEnum;
  percentage: number;
  label?: string;
}
