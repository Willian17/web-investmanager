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
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

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
    DialogModule,
    InputTextareaModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    AvatarModule,
    AvatarGroupModule,
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
    DialogModule,
    InputTextareaModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    DropdownModule,
    AutoCompleteModule,
    InputSwitchModule,
    InputNumberModule,
    AvatarModule,
    AvatarGroupModule,
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
