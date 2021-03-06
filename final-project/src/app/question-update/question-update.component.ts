import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { questionService } from '../question-service';

@Component({
  selector: 'app-question-update',
  templateUrl: './question-update.component.html',
  styleUrls: ['./question-update.component.css']
})
export class QuestionUpdateComponent implements OnInit {
msg:string="";
  constructor(public questionService:questionService) { }

  ngOnInit(): void {
  }
  updateQuestionInfo(questionRef:any){
    this.questionService.updateQuestion(questionRef).subscribe(data=>this.msg=data);
  }
}
