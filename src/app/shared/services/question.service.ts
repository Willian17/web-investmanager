import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/evironments/environment';
import { IQuestion } from '../interfaces/IQuestion';
import { ConfirmationService } from 'primeng/api';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService extends BaseService<IQuestion> {
  constructor(private injector: Injector) {
    super(injector, 'questions');
  }

  async getQuestionsByCategory(category: string): Promise<IQuestion[]> {
    return (await lastValueFrom(
      this.http.get(`${this.baseUrl}/questions/category/${category}`)
    )) as IQuestion[];
  }
}
