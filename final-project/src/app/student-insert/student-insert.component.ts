import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { studentService } from '../student-service';

@Component({
  selector: 'app-student-insert',
  templateUrl: './student-insert.component.html',
  styleUrls: ['./student-insert.component.css']
})
export class StudentInsertComponent implements OnInit {
  studentInfo = new FormGroup({
    stuid:new FormControl(),
    name:new FormControl()
  });
  msg:string=""
  constructor(public stuser:studentService) { }

  ngOnInit(): void {
  }
  storeStudentDetails(){
    
    let studentRef=this.studentInfo.value;
    console.log(studentRef)
    this.stuser.storeStudentInfo(studentRef).subscribe(data=>this.msg=data);
   // this.stuser.updateStudentInfo(studentInfo).subscribe(data=>console.log(data))
  }

}
