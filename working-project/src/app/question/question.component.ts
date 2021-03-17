import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../question-module';
import { questionService } from '../question-service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  questionInfo:Array<Question>=[];
  flag:boolean=false;
  field:boolean=false;
  click : boolean=false;

  questionAdd=new FormGroup({
    qid:new FormControl(),
    question:new FormControl(),
    optionA:new FormControl(),
    optionB:new FormControl(),
    optionC:new FormControl(),
    optionD:new FormControl(),
    answer:new FormControl(),
    sid:new FormControl()
  })
  msg:string="";
  constructor( public questionService:questionService) { }

  ngOnInit(): void {
    this.flag=!this.field;
    this.questionService.displayQuestions().subscribe(data=>this.questionInfo=data);
  }
  fieldAppear():void{
    this.field= !this.field;
    //this.questionService.displayQuestions().subscribe(data=>this.questionInfo=data);
  }
   
   getData(){
    this.questionService.displayQuestions().subscribe(data=>this.questionInfo=data);
   }
  storeStudentDetails(){
    let questionRef= this.questionAdd.value;
    this.questionService.storeQuestion(questionRef).subscribe(data=>this.msg=data);
    this.field= false;
   
  }
  
  deleteRecord(question:any){
  //  console.log(question);
   // this.questionInfo.splice(question.qid,1)
    this.questionService.deleteQuestion(question).subscribe(data=>{
      this.getData()
    });
  }

  updateRecord(question:any){
   
  }
  //displayAllQuestions():void{
    //this.flag=true;
    //this.questionService.displayQuestions().subscribe(data=>this.questionInfo=data);
   // console.log(this.questionInfo)
  //}

}
