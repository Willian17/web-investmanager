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

  async getQuestionsByCategory(category: string): Promise<IQuestion[]> {
    return (await lastValueFrom(
      this.http.get(`${this.baseUrl}/questions/category/${category}`)
    )) as IQuestion[];
  }

  async create(question: IQuestion): Promise<IQuestion> {
    return (await lastValueFrom(
      this.http.post(`${this.baseUrl}/questions`, question)
    )) as IQuestion;
  }

  async update(question: IQuestion): Promise<IQuestion> {
    return (await lastValueFrom(
      this.http.put(`${this.baseUrl}/questions`, question)
    )) as IQuestion;
  }

  async delete(id: number): Promise<IQuestion> {
    return (await lastValueFrom(
      this.http.delete(`${this.baseUrl}/questions/${id}`)
    )) as IQuestion;
  }
}
