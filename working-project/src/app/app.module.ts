import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import {  studentService } from './student-service';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

import { questionService } from './question-service';


import { SubjectDeleteComponent } from './subject-delete/subject-delete.component';
import { SubjectDisplayAllComponent } from './subject-display-all/subject-display-all.component';
import { SubjectInsertComponent } from './subject-insert/subject-insert.component';
import { SubjectUpdateBysidComponent } from './subject-update-bysid/subject-update-bysid.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

import { TestInsertComponent } from './test-insert/test-insert.component';
import { TestDisplayAllComponent } from './test-display-all/test-display-all.component';
import { TestDeleteComponent } from './test-delete/test-delete.component';
import { TestUpdateComponent } from './test-update/test-update.component';
import { TestPassedStudentComponent } from './test-passed-student/test-passed-student.component';
import { TestFailedStudentComponent } from './test-failed-student/test-failed-student.component';
import { TestNotAttemptComponent } from './test-not-attempt/test-not-attempt.component';

import { StudentPersonalDetailsComponent } from './student-personal-details/student-personal-details.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MyGaurds } from './app.gaurds';
import { NocomponentComponent } from './nocomponent/nocomponent.component';
import { StudentComponent } from './student/student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { QuestionComponent } from './question/question.component';
import { SubjectComponent } from './subject/subject.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { TestcomComponent } from './testcom/testcom.component';
import { AllregisteredComponent } from './allregistered/allregistered.component';
import { TestStartComponent } from './test-start/test-start.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { QuestionUpdateComponent } from './question-update/question-update.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentDeleteComponent,
    StudentDisplayComponent,
    StudentInsertComponent,
    StudentUpdateComponent,


    SubjectDeleteComponent,
    SubjectDisplayAllComponent,
    SubjectInsertComponent,
    SubjectUpdateBysidComponent,

    LoginComponent,
    DashboardComponent,

    SignupComponent,
    TestInsertComponent,
    TestDisplayAllComponent,
    TestDeleteComponent,
    TestUpdateComponent,
    TestPassedStudentComponent,
    TestFailedStudentComponent,
    TestNotAttemptComponent,


    SignupComponent,
    StudentPersonalDetailsComponent,
    UpdateProfileComponent,
    NocomponentComponent,
    StudentComponent,
    StudentDashboardComponent,

    

    QuestionComponent,

    SubjectComponent,
    TakeTestComponent,

    TestcomComponent,

    AllregisteredComponent,
    TestStartComponent,
    AboutusComponent,
    ContactusComponent,
    QuestionUpdateComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],

  providers: [studentService,questionService,MyGaurds],

  bootstrap: [AppComponent]
})
export class AppModule { }
