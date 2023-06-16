import { CategoryQuestionEnum } from '../Enuns/CategoryQuestionEnum';

export interface IQuestion {
  id?: number;
  question: string;
  criteorion: string;
  quantity?: number;
  category: CategoryQuestionEnum;
}
