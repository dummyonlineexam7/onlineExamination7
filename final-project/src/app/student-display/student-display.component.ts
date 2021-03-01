import { Component, OnInit } from '@angular/core';
import { studentService } from '../student-service';
import { Student } from '../student-module';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css'],
  providers:[]
})
export class StudentDisplayComponent implements OnInit {
  studentInfo:Array<Student>=[];
  flag:boolean=false;
  constructor(public obj:studentService) { }

  ngOnInit(): void {
  }
  loadStudentData():void{
    this.flag=true;
    this.obj.loadStudentDisplay().subscribe(data=>this.studentInfo=data);
  }

}
