import { CategoryQuestionEnum } from '../Enuns/CategoryQuestionEnum';

export interface IQuestion {
  id?: string;
  question: string;
  criterion: string;
  quantity?: number;
  category: CategoryQuestionEnum;
  response?: boolean;
}
