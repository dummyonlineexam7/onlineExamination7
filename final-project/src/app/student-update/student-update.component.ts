import { Component, OnInit } from '@angular/core';
import { studentService } from '../student-service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
msg:string=""
  constructor(public stuser:studentService) { }

  ngOnInit(): void {
  }
  updateStudentInfo(studentInfo:any){
    this.stuser.updateStudentInfo(studentInfo).subscribe(data=>this.msg=data)
  }

}
