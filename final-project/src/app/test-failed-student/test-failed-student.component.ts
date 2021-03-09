import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PassStudent } from '../pass-student.module';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-failed-student',
  templateUrl: './test-failed-student.component.html',
  styleUrls: ['./test-failed-student.component.css']
})
export class TestFailedStudentComponent implements OnInit {
  failedInfo = new FormGroup({
    sname:new FormControl(),
    level:new FormControl()
  });

  failedDetailsInfo:Array<PassStudent>=[]
  passedDetailsInfo1:string=""
  flag:boolean=false
  constructor(public testsur:TestService) { }

  ngOnInit(): void {
  }
  loadFailedSubjectData(){
    let failedRef=this.failedInfo.value;
    console.log(failedRef.sname)
    console.log(failedRef.level)
    this.testsur.loadFailedStudentDetails(failedRef).subscribe(data=>{
      if(data!=null)
      {
        this.flag=true;
        this.failedDetailsInfo=data;
     // this.a=0;
      }
  })
  console.log(this.failedDetailsInfo.length)
}
}
