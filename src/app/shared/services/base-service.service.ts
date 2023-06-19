import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/evironments/environment';

export abstract class BaseService<T> {
  protected baseUrl: string;
  protected http: HttpClient;
  protected confirmationService: ConfirmationService;

  constructor(injector: Injector, protected url: string) {
    this.baseUrl = environment.apiUrl;
    this.http = injector.get(HttpClient);
    this.confirmationService = injector.get(ConfirmationService);
  }

  async get(): Promise<T[]> {
    return (await lastValueFrom(
      this.http.get(`${this.baseUrl}/${this.url}`)
    )) as T[];
  }

  async create(body: T): Promise<T> {
    return (await lastValueFrom(
      this.http.post(`${this.baseUrl}/${this.url}`, body)
    )) as T;
  }

  async update(body: T, id: string): Promise<T> {
    return (await lastValueFrom(
      this.http.put(`${this.baseUrl}/${this.url}/${id}`, body)
    )) as T;
  }

  async delete(id: string, event: Event): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Tem certeza que deseja excluir? essa ação é irreversível',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        header: 'Confirmação',
        accept: async () => {
          (await lastValueFrom(
            this.http.delete(`${this.baseUrl}/${this.url}/${id}`)
          )) as T;
          resolve(true);
        },
        reject: () => {
          resolve(false);
        },
      });
    });
  }
}
