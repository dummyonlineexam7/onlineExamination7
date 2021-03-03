import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-delete',
  templateUrl: './subject-delete.component.html',
  styleUrls: ['./subject-delete.component.css']
})
export class SubjectDeleteComponent implements OnInit {

  msg:string=""
  constructor(public subser:SubjectService) { }

  ngOnInit(): void {
  }

  deleteSubjectData(sid:any){
    this.subser.deleteSubjectDetails(sid).subscribe(data=>this.msg=data)
  }

}
