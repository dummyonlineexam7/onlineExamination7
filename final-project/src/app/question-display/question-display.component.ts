import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../question-module';
import { questionService } from '../question-service';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent implements OnInit {
  questionInfo:Array<Question>=[];
  flag:boolean=false;
  constructor(public questionService:questionService) { }

  ngOnInit(): void {
  }

  displayAllQuestions():void{
    this.flag=true;
    this.questionService.displayQuestions().subscribe(data=>this.questionInfo=data);
   // console.log(this.questionInfo)
  }
    
  }


