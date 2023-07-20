import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base-service.service';
import { IActive } from '../interfaces/IActive';

@Injectable({
  providedIn: 'root',
})
export class ActiveService extends BaseService<IActive> {
  constructor(private injector: Injector) {
    super(injector, 'actives');
  }
}
