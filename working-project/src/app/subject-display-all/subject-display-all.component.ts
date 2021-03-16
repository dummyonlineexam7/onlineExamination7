import { Component, OnInit } from '@angular/core';
import {Subject} from '../subject-module'
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-display-all',
  templateUrl: './subject-display-all.component.html',
  styleUrls: ['./subject-display-all.component.css']
})
export class SubjectDisplayAllComponent implements OnInit {
  subjectInfo:Array<Subject>=[];
  flag:boolean=false

  constructor(public obj:SubjectService) { }

  ngOnInit(): void {
  }

  loadSubjectData():void{
    this.flag=true
    this.obj.loadSubjectDetails().subscribe(data=>this.subjectInfo=data)

  }

}
