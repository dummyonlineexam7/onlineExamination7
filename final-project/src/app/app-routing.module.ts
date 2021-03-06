import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyGaurds } from './app.gaurds';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NocomponentComponent } from './nocomponent/nocomponent.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentComponent } from './student/student.component';

import { QuestionDeleteComponent } from './question-delete/question-delete.component';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { QuestionStoreComponent } from './question-store/question-store.component';
import { QuestionUpdateComponent } from './question-update/question-update.component';
import { QuestionComponent } from './question/question.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [

{path:"\login",component:LoginComponent,children:[
  {path:"\signup",component:SignupComponent}
]},
{path:"",redirectTo:"\login",pathMatch:"full"},
 // {path:"**",component:NocomponentComponent},
{path:"\admindashboard",component:DashboardComponent,canActivate:[MyGaurds],children:[
 {path:"student",component:StudentComponent,children:[
    {path:"DeleteStudent",component:StudentDeleteComponent},
    {path:"DisplayStudents",component:StudentDisplayComponent},
    {path:"AddStudent",component:StudentInsertComponent},
    {path:"UpdateStudent",component:StudentUpdateComponent}
  ]},
  {path:"question",component:QuestionComponent,children:[
    {path:"store",component:QuestionStoreComponent},
    {path:"get",component: QuestionDisplayComponent},
    {path:"Update",component:QuestionUpdateComponent},
    {path:"delete",component: QuestionDeleteComponent}
  ]},
  {path:"subject",component:SubjectComponent,children:[
    {path:"UpdateStudent",component:StudentUpdateComponent}
    ]}
]},

{path:"\studentdasboard",component:StudentDashboardComponent,canActivate:[MyGaurds],children:[
  {path:"subject",component:SubjectComponent,children:[
  {path:"UpdateStudent",component:StudentUpdateComponent}
  ]}
]},
{path:"\home",component:DashboardComponent},
{path:"\signup",component:SignupComponent}

]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
