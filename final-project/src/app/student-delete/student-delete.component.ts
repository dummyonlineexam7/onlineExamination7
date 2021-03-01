import { Component, OnInit } from '@angular/core';
import { studentService } from '../student-service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
msg:string=""
  constructor(public stuser:studentService) { }

  ngOnInit(): void {
  }
  deleteById(stuid:any){
    this.stuser.deleteStudentInfo(stuid).subscribe(data=>this.msg=data)
  }
}
