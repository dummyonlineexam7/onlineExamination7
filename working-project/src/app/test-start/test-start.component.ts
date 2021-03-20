import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { questionService } from '../question-service';
import { Subject } from '../subject-module';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.css']
})
export class TestStartComponent implements OnInit {

  QuestionInfo:Array<any>=[];
  flag:boolean=false
  i:number=0
  sid:number=0
  testRef1=new FormGroup({
    sname:new FormControl(),
    level:new FormControl()
  });
   name:any
   subjectInfo:Array<Subject>=[]
  

  constructor(public taketestSur:questionService, public router:Router, public obj:SubjectService) { }

  ngOnInit(): void {
    this.obj.loadSubjectDetails().subscribe(data=>this.subjectInfo=data)
  }

  TakeTestData(sub:any,slevel:any){
   
   
   for(let a of this.subjectInfo)
   {
    
     if(a.sname==sub && a.level==slevel)
     {
      
        this.sid=a.sid
     }
   }
    sessionStorage.setItem("obj",sub)
    sessionStorage.setItem("obj1",slevel)
    sessionStorage.setItem("obj2",JSON.stringify(this.sid))
    
    this.router.navigate(["Test"])
  }

}
