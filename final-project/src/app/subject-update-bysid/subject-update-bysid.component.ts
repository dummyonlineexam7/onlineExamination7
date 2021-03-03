import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-update-bysid',
  templateUrl: './subject-update-bysid.component.html',
  styleUrls: ['./subject-update-bysid.component.css']
})
export class SubjectUpdateBysidComponent implements OnInit {

  msg:String=""
  constructor(public subser:SubjectService) { }

  ngOnInit(): void {
  }

  updateSubjectData(subjectInfo:any){
    this.subser.updateSubjectDetails(subjectInfo).subscribe(data=>this.msg=data)
  }

}
