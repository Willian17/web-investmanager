import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base-service.service';
import { IMark } from '../interfaces/IMark';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarkService extends BaseService<IMark> {
  constructor(private injector: Injector) {
    super(injector, 'marks');
  }

  async updateMark(body: IMark[]): Promise<IMark> {
    return (await lastValueFrom(
      this.http.put(`${this.baseUrl}/${this.url}`, body)
    )) as IMark;
  }
}
