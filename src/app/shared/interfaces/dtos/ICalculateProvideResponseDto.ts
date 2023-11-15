import { CategoryEnum } from '../../Enuns/CategoryEnum';

export interface ICalculateProvideResponseDto {
  totalContribution: number;
  totalContributionCategory: IContributionCategory[];
  actives: IContributionActive[];
}

interface IContributionCategory {
  category: CategoryEnum;
  contributionAmount: number;
  percentage: number;
}

interface IContributionActive {
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
