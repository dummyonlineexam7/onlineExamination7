import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-update-bysid',
  templateUrl: './subject-update-bysid.component.html',
  styleUrls: ['./subject-update-bysid.component.css']
})
export class SubjectUpdateBysidComponent implements OnInit {

  msg:String=""
  sid:any;
  sname:any;
  level:any;
  constructor(public subser:SubjectService,public router:Router) { }

  ngOnInit(): void {
    let ssid=sessionStorage.getItem("id")
    if(ssid!=null)
    {
      this.sid=JSON.parse(ssid)
    }
    let ssname=sessionStorage.getItem("name")
    if(ssname!=null)
    {
      this.sname=JSON.parse(ssname)
    }
    let llevel=sessionStorage.getItem("level")
    if(llevel!=null)
    {
      this.level=JSON.parse(llevel)
    }

  }

  updateSubjectData(subjectInfo:any){
    this.subser.updateSubjectDetails(subjectInfo).subscribe(data=>this.msg=data)
  }

  goback(){
    window.history.back();
  }

  logout(){
    sessionStorage.removeItem("name");
    this.router.navigate(["login"]);
  }

}
