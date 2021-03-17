import { Component, OnInit } from '@angular/core';
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
  constructor(public subser:SubjectService) { }

  ngOnInit(): void {
    let ssid=sessionStorage.getItem("id")
    if(ssid!=null)
    {
      this.sid=ssid
    }
    let ssname=sessionStorage.getItem("name")
    if(ssname!=null)
    {
      this.sname=ssname
    }
    let llevel=sessionStorage.getItem("level")
    if(llevel!=null)
    {
      this.level=llevel
    }
  }

  updateSubjectData(subjectInfo:any){
    this.subser.updateSubjectDetails(subjectInfo).subscribe(data=>this.msg=data)
  }

  goback(){
    window.history.back();
  }

}
