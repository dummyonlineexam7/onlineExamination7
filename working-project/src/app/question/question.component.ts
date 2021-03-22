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
  constructor( public questionService:questionService,public router:Router) { }

  ngOnInit(): void {
    this.flag=!this.field;
    this.questionService.displayQuestions().subscribe(data=>this.questionInfo=data);
  }

  
  fieldAppear():void{
    this.field= !this.field;
  }
   
   getData(){
    this.questionService.displayQuestions().subscribe(data=>this.questionInfo=data);
   }
  storeStudentDetails(){
    let questionRef= this.questionAdd.value;
    this.questionService.storeQuestion(questionRef).subscribe(data=>{
      this.getData()
    });
    this.field= false;
   
  }
  
  deleteRecord(question:any){
    this.questionService.deleteQuestion(question).subscribe(data=>{
      this.getData()
    });
  }

  updateRecord(qid:any,question:any,optionA:any,optionB:any,optionC:any,optionD:any,answer:any,sid:any){
    sessionStorage.setItem("QuestionNo",qid),
    sessionStorage.setItem("Question",question),
    sessionStorage.setItem("OptionA",optionA),
    sessionStorage.setItem("OptionB",optionB),
    sessionStorage.setItem("OptionC",optionC),
    sessionStorage.setItem("OptionD",optionD),
    sessionStorage.setItem("Answer",answer),
    sessionStorage.setItem("Subject",sid),

     this.router.navigate(["QuestionUpdate"])
  }

}
