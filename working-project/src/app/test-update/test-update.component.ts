import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-update',
  templateUrl: './test-update.component.html',
  styleUrls: ['./test-update.component.css']
})
export class TestUpdateComponent implements OnInit {
  msg:string=""
  testname:any
  noofquestions:any
  score:any
  status:any
  testid:any

  constructor(public testsur:TestService) { }

  ngOnInit(): void {
    let tn=sessionStorage.getItem("tname")
    if(tn!=null)
    {
      this.testname=tn
    }
    let noq=sessionStorage.getItem("noofquestions")
    if(noq!=null)
    {
      this.noofquestions=noq
    }
    let tscore=sessionStorage.getItem("score")
    if(tscore!=null)
    {
      this.score=tscore
    }
    let tstatus=sessionStorage.getItem("status")
    if(tstatus!=null)
    {
      this.status=tstatus
    }
    let tid=sessionStorage.getItem("testid")
    if(tid!=null)
    {
      this.testid=tid
    }
  }

  updateTestData(testInfo:any){
    this.testsur.updateTestDetails(testInfo).subscribe(data=>this.msg=data)

  }
  goback(){
    window.history.back();
  }
}
