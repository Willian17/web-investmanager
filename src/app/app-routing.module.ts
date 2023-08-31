import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { ActivesComponent } from './modules/actives/actives.component';
import { AuthGuard } from './modules/auth/auth.guard';
import { QuestionsComponent } from './modules/questions/questions.component';
import { QuestionCategoryComponent } from './modules/questions/question-category/question-category.component';
import { ActiveComponent } from './modules/actives/active/active.component';
import { MarksComponent } from './modules/marks/marks.component';
import { ContributeComponent } from './modules/contribute/contribute.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'actives',
  },
  {
    path: 'actives',
    component: ActivesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-contribution',
    component: ContributeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'actives/active',
    component: ActiveComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'marks',
    component: MarksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'questions',
    component: QuestionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'questions/:category',
    component: QuestionCategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
