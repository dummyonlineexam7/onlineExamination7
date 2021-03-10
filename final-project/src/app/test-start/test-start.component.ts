import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../question-module';
import { questionService } from '../question-service';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.css']
})
export class TestStartComponent implements OnInit {

  QuestionInfo:Array<any>=[];
  flag:boolean=false
  i:number=0
  testRef=new FormGroup({
    sname:new FormControl(),
    level:new FormControl(),
  })
   name:any
  
  msg:string="You are already in last question"

  constructor(public taketestSur:questionService, public router:Router) { }

  ngOnInit(): void {
  }

  TakeTestData(){
    this.name=this.testRef.value
    this.QuestionInfo.length=0
    this.flag=true
    this.taketestSur.getQuestionsBylevelandSubject(this.name).subscribe(data=>{
      if(data!=null){
        this.flag=true;
        this.QuestionInfo=data;
        sessionStorage.setItem("obj","QuestionInfo")
        this.router.navigate(["Test"])
        //console.log(this.QuestionInfo[this.i]?.answer)
      }

    });

  }

}
