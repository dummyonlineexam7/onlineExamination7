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
  result:boolean=false;
  constructor(public obj:SubjectService,public router:Router) { }

  ngOnInit(): void {
   // this.flag=true
    this.obj.loadSubjectDetails().subscribe(data=>this.subjectInfo=data)
  }
  getdata(){
    this.obj.loadSubjectDetails().subscribe(data=>this.subjectInfo=data)
  }
  deleteSubjectData(sid:any){
     this.result=confirm("Are You sure you want to Delete?")
    if(this.result==true)
    {
      this.obj.deleteSubjectDetails(sid).subscribe(data=>{this.getdata()})
    }
    //this.obj.deleteSubjectDetails(sid).subscribe(data=>{this.getdata()})
  }
  updateSubjectData(sid:any,sname:any,level:any){
    //console.log(sid+" "+sname+" "+level)
    sessionStorage.setItem("id",JSON.stringify (sid));
    sessionStorage.setItem("name",JSON.stringify (sname))
    sessionStorage.setItem("level",JSON.stringify (level))
    this.router.navigate(["UpdateSubject"])
    //console.log(id,internetkit)
  }
  

}
