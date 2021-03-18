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
import { TakeTestComponent } from './take-test/take-test.component';
import { TestStartComponent } from './test-start/test-start.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { QuestionUpdateComponent } from './question-update/question-update.component';

const routes: Routes = [

{path:"\login",component:LoginComponent,children:[
  {path:"\signup",component:SignupComponent}
]},
{path:"\signup",component:SignupComponent},
{path:"",redirectTo:"\login",pathMatch:"full"},
 // {path:"**",component:NocomponentComponent},
{path:"\admindashboard",component:DashboardComponent,canActivate:[MyGaurds],children:[
 {path:"student",component:StudentComponent,children:[
    {path:"DeleteStudent",component:StudentDeleteComponent},
    {path:"DisplayStudents",component:StudentDisplayComponent},
    {path:"AddStudent",component:StudentInsertComponent},
    {path:"UpdateStudent",component:StudentUpdateComponent}
  ]},
  {path:"\question",component:QuestionComponent,children:[
   {path:"\QuestionUpdate",component:QuestionUpdateComponent }
  ]},
  //{path:"QuestionUpdate",component:QuestionUpdateComponent },
  
 /* {path:"subject",component:SubjectComponent,children:[
    {path:"AddSubject",component:SubjectInsertComponent},
    {path:"RetriveSubject",component:SubjectDisplayAllComponent},
    {path:"DeleteSubject",component:SubjectDeleteComponent},
    {path:"UpdateSubject",component:SubjectUpdateBysidComponent}
    ]},*/
  {path:"\subject",component:SubjectComponent,children:[
    {path:"UpdateSubject",component:SubjectUpdateBysidComponent}
  ]},
  //{path:"\UpdateSubject",component:SubjectUpdateBysidComponent},
  

    {path:"\TestDetails",component:TestcomComponent,children:[
     // {path:"Insert-Test-Details",component:TestInsertComponent},
     // {path:"Delete-Test-Details",component:TestDeleteComponent},
      {path:"UpdateTestDetails",component:TestUpdateComponent}
     // {path:"DisplayAll-Test-Details",component:TestDisplayAllComponent},
     // {path:"passedstudentlist",component:TestPassedStudentComponent},
     // {path:"failedstudentlist",component:TestFailedStudentComponent}

    ]},
    {path:"Registered",component:AllregisteredComponent}

]},

{path:"\UpdateTestDetails",component:TestUpdateComponent},

{path:"\QuestionUpdate",component:QuestionUpdateComponent },

{path:"\UpdateSubject",component:SubjectUpdateBysidComponent},
{path:"\studentdasboard",component:StudentDashboardComponent,canActivate:[MyGaurds],children:[
 {path:"profile",component:StudentPersonalDetailsComponent},
 {path:"update",component:UpdateProfileComponent},
  {path:"TakeTest",component:TestStartComponent,children:[
    {path:"\Test",component:TakeTestComponent}
  ]},
  {path:"about",component:AboutusComponent},
  {path:"contact",component:ContactusComponent}
  ]},

  
  {path:"\Test",component:TakeTestComponent}
  

]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
