import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { questionService } from '../question-service';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.css']
})
export class TestStartComponent implements OnInit {

  QuestionInfo:Array<any>=[];
  flag:boolean=false
  i:number=0
  testRef1=new FormGroup({
    sname:new FormControl(),
    level:new FormControl()
  });
   name:any
  
  msg:string="You are already in last question"

  constructor(public taketestSur:questionService, public router:Router) { }

  ngOnInit(): void {
  }

  TakeTestData(testRef1:any){
   // let a=this.testRef1.value
    sessionStorage.setItem("obj",testRef1.sname)
    sessionStorage.setItem("obj1",testRef1.level)
    this.router.navigate(["Test"])
  }

}
