import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from '../student-module';
import { studentService } from '../student-service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentInfo:Array<Student>=[];
  studentInfo1 = new FormGroup({
    stuid:new FormControl(),
    name:new FormControl()
  });
  msg:string=""
  constructor(public obj:studentService) { }

  ngOnInit(): void {
    this.obj.loadStudentDisplay().subscribe(data=>this.studentInfo=data);
    console.log(this.studentInfo)
  }
  storeStudentDetails(){
    let studentRef=this.studentInfo1.value;
    this.obj.storeStudentInfo(studentRef).subscribe(data=>this.msg=data);
   // this.stuser.updateStudentInfo(studentInfo).subscribe(data=>console.log(data))
  }
}
