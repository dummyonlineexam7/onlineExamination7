import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestDetails } from '../test-module';
import { TestService } from '../test.service';

@Component({
  selector: 'app-testcom',
  templateUrl: './testcom.component.html',
  styleUrls: ['./testcom.component.css']
})
export class TestcomComponent implements OnInit {
  testInfo:Array<TestDetails>=[]
  msg:string=""
  constructor(public testsur:TestService,public router:Router) { }

  ngOnInit(): void {
    this.testsur.loadTestDetails().subscribe(data=>this.testInfo=data);
  }
  gettest()
  {
    this.testsur.loadTestDetails().subscribe(data=>this.testInfo=data);
  }
  deleteTestDetailsData(sid:any){
    this.testsur.deleteTestDetails(sid).subscribe(data=>{this.gettest()})
  }
  updateTestDetailsData(testname:any,noofquestions:any,score:any,status:any,testid:any){
    sessionStorage.setItem("tname",testname);
    sessionStorage.setItem("noofquestions",noofquestions)
    sessionStorage.setItem("score",score)
    sessionStorage.setItem("status",status)
    sessionStorage.setItem("id",testid)
    this.router.navigate(["UpdateTestDetails"])
    //console.log(id,internetkit)
  }
}
