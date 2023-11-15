import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base-service.service';
import { IActive } from '../interfaces/IActive';
import { lastValueFrom } from 'rxjs';
import { ITickerResponseDto } from '../interfaces/dtos/ITickerResponseDto';
import { ICalculateProvideRequestDto } from '../interfaces/dtos/ICalculateProvideRequestDto';
import { ICalculateProvideResponseDto } from '../interfaces/dtos/ICalculateProvideResponseDto';
import { IActivesResponseDto } from '../interfaces/dtos/IActivesResponseDto';

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

  async findAll(): Promise<IActivesResponseDto> {
    return (await lastValueFrom(
      this.http.get(`${this.baseUrl}/${this.url}`)
    )) as IActivesResponseDto;
  }

  async calculateProvideActives(
    body: ICalculateProvideRequestDto
  ): Promise<ICalculateProvideResponseDto> {
    return (await lastValueFrom(
      this.http.post(`${this.baseUrl}/contribute/calculate`, body)
    )) as ICalculateProvideResponseDto;
  }
}
