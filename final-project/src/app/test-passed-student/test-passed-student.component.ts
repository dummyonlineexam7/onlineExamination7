import { Component, OnInit } from '@angular/core';
import { PassedStudent } from '../test-module';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-passed-student',
  templateUrl: './test-passed-student.component.html',
  styleUrls: ['./test-passed-student.component.css']
})
export class TestPassedStudentComponent implements OnInit {
  passedDetailsInfo:Array<PassedStudent>=[]
  flag:boolean=false
  constructor(public testsur:TestService) { }

  ngOnInit(): void {
  }

  loadPassedSubjectData(sname:any){
    this.flag=true;
    this.testsur.loadPassedStudentDetails(sname).subscribe(data=>this.passedDetailsInfo=data)
  }

}
