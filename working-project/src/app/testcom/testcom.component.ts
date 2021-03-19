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
  unique:Array<string>=[]
  passedDetails:Array<TestDetails>=[]
  failedDetails:Array<TestDetails>=[]
  a:Array<any>=[]
  norecordmsg:string="No Records Found.."
  res:boolean=false
  msg:string=""
  flag:boolean=false
  flag1:boolean=false
  flag2:boolean=false
  flag3:boolean=false
  flag4:boolean=false
  constructor(public testsur:TestService,public router:Router,public obj:SubjectService) { }

  ngOnInit(): void {
   
    this.testsur.loadTestDetails().subscribe(data=>{
    if(data!=null){
    this.flag=true;
    this.flag1=true;
    this.flag2=false
    this.flag3=false
    this.testInfo=data
    this.obj.loadSubjectDetails().subscribe(data=>this.subjectInfo=data)
     console.log([new Set(this.subjectInfo.map(item => item.sname))])
     console.log(this.unique[0])
    }
    else{
      this.flag=false
    this.flag1=false;
    this.flag2=false
    this.flag3=false
    this.flag4=true;

    }})
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
    this.passedDetails=[]
    this.testsur.loadPassedStudentDetails(sub,slevel).subscribe(data=>{
    console.log("aa"+this.passedDetails)
    if(data.length==0) //data!=null && data.find
      {
        console.log("not displaying "+this.passedDetails.length)
        console.log("no data"+this.flag1,this.flag2,this.flag3,this.flag4)
        this.flag3=false
        this.flag1=false;
        this.flag2=false
        this.flag4=true;
        console.log(this.flag1,this.flag2,this.flag3,this.flag4)
       /*this.flag3=false
        this.flag1=false;
        this.flag4=false
       console.log("displaying"+this.passedDetails.length)
        this.flag2=true;
        this.passedDetails=data;
        console.log("zz"+this.passedDetails)*/
      }
      else
     {
      this.flag3=false
      this.flag1=false;
      this.flag4=false
     console.log("displaying"+this.passedDetails.length)
      this.flag2=true;
      this.passedDetails=data;
      console.log("zz"+this.passedDetails)

      /*console.log("not displaying "+this.passedDetails.length)
        console.log("no data"+this.flag1,this.flag2,this.flag3,this.flag4)
        this.flag3=false
        this.flag1=false;
        this.flag2=false
        this.flag4=true;
        console.log(this.flag1,this.flag2,this.flag3,this.flag4)*/
        
      }})
  }
  failedList(sub:any,slevel:any){ 
    this.testsur.loadFailedStudentDetails(sub,slevel).subscribe(data=>{
    if(data.length==0)  //data!=null
      {
        this.flag1=false
        this.flag2=false
        this.flag3=false
        this.flag4=true;
       // this.flag1=false
        //this.flag2=false
        //this.flag4=false
        //this.flag3=true
       //this.failedDetails=data;
        
      }
      else{
        //console.log(this.flag1,this.flag2,this.flag3,this.flag4)
        this.flag1=false
        this.flag2=false
        this.flag3=true
        this.flag4=false;
        this.failedDetails=data
       // console.log(this.flag1,this.flag2,this.flag3,this.flag4)
       
        
      }})
  }

 
}
