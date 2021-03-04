import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionDeleteComponent } from './question-delete/question-delete.component';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { QuestionStoreComponent } from './question-store/question-store.component';
import { QuestionUpdateComponent } from './question-update/question-update.component';

const routes: Routes = [
{path:"\store",component:QuestionStoreComponent},
{path:"\get",component: QuestionDisplayComponent},
{path:"\Update",component:QuestionUpdateComponent},
{path:"\delete",component: QuestionDeleteComponent}

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"\login",component:LoginComponent},
  {path:"\signup",component:SignupComponent},
  {path:"\home",component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
