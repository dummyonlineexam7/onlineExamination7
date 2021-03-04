import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { questionService } from '../question-service';

@Component({
  selector: 'app-question-store',
  templateUrl: './question-store.component.html',
  styleUrls: ['./question-store.component.css']
})
export class QuestionStoreComponent implements OnInit {

  questionInfo=new FormGroup({
    qid:new FormControl(),
    question:new FormControl(),
    optionA:new FormControl(),
    optionB:new FormControl(),
    optionC:new FormControl(),
    optionD:new FormControl(),
    answer:new FormControl(),
    sid:new FormControl()


  })
   msg:string=""
  constructor(public queService:questionService) { }

  ngOnInit(): void {
  }
  storeQuestionDetails(){
    let questionRef= this.questionInfo.value;
    this.queService.storeQuestion(questionRef).subscribe(data=>this.msg=data);
  }
}
