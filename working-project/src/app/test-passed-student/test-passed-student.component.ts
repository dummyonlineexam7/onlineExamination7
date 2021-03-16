import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PassStudent } from '../pass-student.module';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-passed-student',
  templateUrl: './test-passed-student.component.html',
  styleUrls: ['./test-passed-student.component.css']
})
export class TestPassedStudentComponent implements OnInit {
  passedInfo = new FormGroup({
    sname:new FormControl(),
    level:new FormControl()
  });

  passedDetailsInfo:Array<PassStudent>=[]
  passedDetailsInfo1:string=""
  flag:boolean=false
  a:number=1
  constructor(public testsur:TestService) { }

  ngOnInit(): void {
   /*    this.route.paramMap.subscribe(params=>{
      this.sname=params.get('sname.value');
    this.testsur.loadPassedStudentDetails(this.sname).subscribe(data=>{
      if(data!=null)
      {
        this.flag=true;
        this.passedDetailsInfo=data;
      }
  })
  })
}*/
  }

  loadPassedSubjectData(){
    let passedRef=this.passedInfo.value;
    console.log(passedRef.sname)
    console.log(passedRef.level)
    this.testsur.loadPassedStudentDetails(passedRef).subscribe(data=>{
      if(data!=null)
      {
        this.flag=true;
        this.passedDetailsInfo=data;
      this.a=0;
      }
  })
  console.log(this.passedDetailsInfo.length)
}
//this.passedDetailsInfo=null



}
