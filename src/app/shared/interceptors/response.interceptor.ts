import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(
    private messageService: MessageService,
    private userService: UserService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Erro no cliente: ${error.error.message}`;
        } else if (error.status === 401) {
          errorMsg = 'Usuário não autorizado!';
          this.userService.logout();
          this.router.navigate(['/signin']);
        } else {
          errorMsg =
            error.error.message || 'Ocorreu um erro ao fazer a solicitação!';
        }

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMsg,
        });
        throw error;
      })
    );
  }
}
