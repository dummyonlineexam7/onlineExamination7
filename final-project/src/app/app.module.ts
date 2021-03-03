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
import { SubjectDeleteComponent } from './subject-delete/subject-delete.component';
import { SubjectDisplayAllComponent } from './subject-display-all/subject-display-all.component';
import { SubjectInsertComponent } from './subject-insert/subject-insert.component';
import { SubjectUpdateBysidComponent } from './subject-update-bysid/subject-update-bysid.component';

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
    SubjectUpdateBysidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [studentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
