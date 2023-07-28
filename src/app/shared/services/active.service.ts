import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base-service.service';
import { IActive } from '../interfaces/IActive';
import { lastValueFrom } from 'rxjs';
import { ITickerResponseDto } from '../interfaces/dtos/ITickerResponseDto';

@Injectable({
  providedIn: 'root',
})
export class ActiveService extends BaseService<IActive> {
  constructor(private injector: Injector) {
    super(injector, 'actives');
  }

  async searchTicket(
    category: string,
    ticker: string
  ): Promise<ITickerResponseDto> {
    return (await lastValueFrom(
      this.http.get(`${this.baseUrl}/actives/ticker`, {
        params: { ticker, category },
      })
    )) as ITickerResponseDto;
  }
}
