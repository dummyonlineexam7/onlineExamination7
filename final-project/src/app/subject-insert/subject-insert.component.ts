import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-insert',
  templateUrl: './subject-insert.component.html',
  styleUrls: ['./subject-insert.component.css']
})
export class SubjectInsertComponent implements OnInit {

  subjectInfo= new FormGroup({
    sid:new FormControl(),
    sname:new FormControl(),
    level:new FormControl()
  });
  msg:string=""
  constructor(public subjectSer:SubjectService) { }

  ngOnInit(): void {
  }

  storeSubjectDetails(){
    let subjectRef=this.subjectInfo.value;
    this.subjectSer.storeSubjectDetails(subjectRef).subscribe(data=>this.msg=data);
  }

}
