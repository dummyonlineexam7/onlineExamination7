import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from '../subject-module'
import { SubjectService } from '../subject.service';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjectInfo:Array<Subject>=[];
  // flag:boolean=false
  msg:string=""
  constructor(public obj:SubjectService,public router:Router) { }

  ngOnInit(): void {
   // this.flag=true
    this.obj.loadSubjectDetails().subscribe(data=>this.subjectInfo=data)
  }
  deleteSubjectData(sid:any){
    this.obj.deleteSubjectDetails(sid).subscribe(data=>this.msg=data)
  }
  updateSubjectData(sid:any,sname:any,level:any){
    sessionStorage.setItem("id",sid);
    sessionStorage.setItem("name",sname)
    sessionStorage.setItem("level",level)
    this.router.navigate(["UpdateSubject"])
    //console.log(id,internetkit)
  }

}
