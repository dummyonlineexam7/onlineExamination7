import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from '../question-module';
import { questionService } from '../question-service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {

  QuestionInfo:Array<any>=[];
  flag:boolean=false
  i:number=0
  myRadio:string=""

  msg:string="You are already in last question"
  constructor(public taketestSur:questionService) { }

  ngOnInit(): void {
  }

  TakeTestData(testRef:any){
    this.flag=true
    this.taketestSur.getQuestionsBylevelandSubject(testRef).subscribe(data=>{
      if(data!=null){
        this.flag=true;
        this.QuestionInfo=data;
        //console.log(this.QuestionInfo=Array.from(Object.keys(data),k=>data));
        //console.log(this.QuestionInfo[this.i]?.answer)
      }

    });

  }
  nextquestion(){
   this.i++;
  }
  previousquestion(){
    this.i--;
  }
  check(){
   // this.selectedanswer=document.getElementsByName('option');
    console.log(this.myRadio)
  }
  calculatemarks(){
    //this.selectedanswer=document.getElementsByName('option');
  }

}
