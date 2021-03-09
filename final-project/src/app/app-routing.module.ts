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
import { SubjectUpdateBysidComponent } from './subject-update-bysid/subject-update-bysid.component';
import { SubjectInsertComponent } from './subject-insert/subject-insert.component';
import { SubjectDisplayAllComponent } from './subject-display-all/subject-display-all.component';
import { SubjectDeleteComponent } from './subject-delete/subject-delete.component';
import { TestcomComponent } from './testcom/testcom.component';
import { TestInsertComponent } from './test-insert/test-insert.component';
import { TestDeleteComponent } from './test-delete/test-delete.component';
import { TestUpdateComponent } from './test-update/test-update.component';
import { TestDisplayAllComponent } from './test-display-all/test-display-all.component';
import { TestPassedStudentComponent } from './test-passed-student/test-passed-student.component';
import { AllregisteredComponent } from './allregistered/allregistered.component';

import { StudentPersonalDetailsComponent } from './student-personal-details/student-personal-details.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { TestFailedStudentComponent } from './test-failed-student/test-failed-student.component';

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
    {path:"AddSubject",component:SubjectInsertComponent},
    {path:"RetriveSubject",component:SubjectDisplayAllComponent},
    {path:"DeleteSubject",component:SubjectDeleteComponent},
    {path:"UpdateSubject",component:SubjectUpdateBysidComponent}
    ]},
    {path:"TestDetails",component:TestcomComponent,children:[
      {path:"Insert-Test-Details",component:TestInsertComponent},
      {path:"Delete-Test-Details",component:TestDeleteComponent},
      {path:"Update-Test-Details",component:TestUpdateComponent},
      {path:"DisplayAll-Test-Details",component:TestDisplayAllComponent},
      {path:"passedstudentlist",component:TestPassedStudentComponent},
      {path:"failedstudentlist",component:TestFailedStudentComponent}

    ]},
    {path:"Registered",component:AllregisteredComponent}

]},

{path:"\studentdasboard",component:StudentDashboardComponent,canActivate:[MyGaurds],children:[
 {path:"profile",component:StudentPersonalDetailsComponent},
 {path:"update",component:UpdateProfileComponent}
  ]}


]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
