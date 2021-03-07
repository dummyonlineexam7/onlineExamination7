import { Component, OnInit } from '@angular/core';
import { passstudent } from '../pass-student.module';
import { TestDetails } from '../test-module';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-passed-student',
  templateUrl: './test-passed-student.component.html',
  styleUrls: ['./test-passed-student.component.css']
})
export class TestPassedStudentComponent implements OnInit {
  passedDetailsInfo:Array<passstudent>=[]
  passedDetailsInfo1:string=""
  //Info:Array<passstudent>=[]
  flag:boolean=false
  constructor(public testsur:TestService) { }

  ngOnInit(): void {
  }

  loadPassedSubjectData(sname:any){
    
    this.testsur.loadPassedStudentDetails(sname).subscribe(data=>{
      if(data!=null)
      {
        this.flag=true;
       // this.passedDetailsInfo1=JSON.stringify(data)
        this.passedDetailsInfo1=JSON.stringify(data)
    console.log(this.passedDetailsInfo1)
      
    this.passedDetailsInfo=JSON.parse(this.passedDetailsInfo1)
    console.log(this.passedDetailsInfo)
      }
    //this.passedDetailsInfo=data
  })
}

}
