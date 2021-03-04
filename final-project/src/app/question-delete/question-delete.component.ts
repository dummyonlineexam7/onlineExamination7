import { Component, OnInit } from '@angular/core';
import { questionService } from '../question-service';

@Component({
  selector: 'app-question-delete',
  templateUrl: './question-delete.component.html',
  styleUrls: ['./question-delete.component.css']
})
export class QuestionDeleteComponent implements OnInit {
  msg :string="";
  constructor(public quesService:questionService) { }

  ngOnInit(): void {
  }
  deleteById(qid:any){
    this.quesService.deleteQuestion(qid).subscribe(data=>this.msg=data)
  }
}
