import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../subject-module';
import { SubjectService } from '../subject.service';


import { TestDetails } from '../test-module';
import { TestService } from '../test.service';

@Component({
  selector: 'app-testcom',
  templateUrl: './testcom.component.html',
  styleUrls: ['./testcom.component.css']
})
export class TestcomComponent implements OnInit {
  testInfo:Array<TestDetails>=[]
  subjectInfo:Array<Subject>=[]
  passedDetails:Array<TestDetails>=[]
  failedDetails:Array<TestDetails>=[]
  res:boolean=false
  msg:string=""
  flag:boolean=false
  constructor(public testsur:TestService,public router:Router,public obj:SubjectService) { }

  ngOnInit(): void {
    this.testsur.loadTestDetails().subscribe(data=>this.testInfo=data);
    this.flag=true;
    this.obj.loadSubjectDetails().subscribe(data=>this.subjectInfo=data)
  }
  gettest()
  {
    this.testsur.loadTestDetails().subscribe(data=>this.testInfo=data);
  }
  deleteTestDetailsData(sid:any){
    this.res=confirm("Are you sure want to delete this record?")
    if(this.res==true){
    this.testsur.deleteTestDetails(sid).subscribe(data=>{this.gettest()})
    }
  }
  updateTestDetailsData(testid:any,testname:any,noofquestions:any,score:any,status:any){
    console.log("id is"+testid)
    sessionStorage.setItem("id",testid)
    sessionStorage.setItem("tname",testname);
    sessionStorage.setItem("noofquestions",noofquestions)
    sessionStorage.setItem("score",score)
    sessionStorage.setItem("status",status)
    this.router.navigate(["UpdateTestDetails"])
    //console.log(id,internetkit)
  }
  passedList(sub:any,slevel:any){
    this.testsur.loadPassedStudentDetails(sub,slevel).subscribe(data=>this.passedDetails=data)
    console.log(this.passedDetails)
  }
  failedList(sub:any,slevel:any){
    this.testsur.loadFailedStudentDetails(sub,slevel).subscribe(data=>this.failedDetails=data)
    console.log(this.failedDetails)
  }
}
