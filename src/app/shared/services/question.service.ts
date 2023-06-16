import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/evironments/environment';
import { IQuestion } from '../interfaces/IQuestion';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  async getQuestions(): Promise<IQuestion[]> {
    return (await lastValueFrom(
      this.http.get(`${this.baseUrl}/questions`)
    )) as IQuestion[];
  }
}
