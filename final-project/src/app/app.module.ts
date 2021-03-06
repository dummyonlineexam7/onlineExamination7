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
import { QuestionStoreComponent } from './question-store/question-store.component';
import { questionService } from './question-service';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { QuestionUpdateComponent } from './question-update/question-update.component';
import { QuestionDeleteComponent } from './question-delete/question-delete.component';

import { SubjectDeleteComponent } from './subject-delete/subject-delete.component';
import { SubjectDisplayAllComponent } from './subject-display-all/subject-display-all.component';
import { SubjectInsertComponent } from './subject-insert/subject-insert.component';
import { SubjectUpdateBysidComponent } from './subject-update-bysid/subject-update-bysid.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { StudentPersonalDetailsComponent } from './student-personal-details/student-personal-details.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MyGaurds } from './app.gaurds';
import { NocomponentComponent } from './nocomponent/nocomponent.component';
import { StudentComponent } from './student/student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDeleteComponent,
    StudentDisplayComponent,
    StudentInsertComponent,
    StudentUpdateComponent,

    QuestionStoreComponent,
    QuestionDisplayComponent,
    QuestionUpdateComponent,
    QuestionDeleteComponent


    SubjectDeleteComponent,
    SubjectDisplayAllComponent,
    SubjectInsertComponent,
    SubjectUpdateBysidComponent

    LoginComponent,
    DashboardComponent,

    SignupComponent,
    StudentPersonalDetailsComponent,
    UpdateProfileComponent,
    NocomponentComponent,
    StudentComponent,
    StudentDashboardComponent

    SignupComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],

  providers: [studentService,MyGaurds],

  providers: [studentService,questionService],

  bootstrap: [AppComponent]
})
export class AppModule { }
