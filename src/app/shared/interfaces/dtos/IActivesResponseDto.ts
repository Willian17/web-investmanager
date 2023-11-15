import { IActive } from '../IActive';

export interface IActivesResponseDto {
  totalEquity: number;
  actives: IActive[];
}
