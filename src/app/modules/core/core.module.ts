import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseInterceptor } from 'src/app/shared/interceptors/response.interceptor';
import { RequestInterceptor } from 'src/app/shared/interceptors/request.interceptor';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ToastModule,
    RouterModule,
    FontAwesomeModule,
    CardModule,
    TagModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    RouterModule,
    MenuComponent,
    FontAwesomeModule,
    CardModule,
    TableModule,
    TagModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
