import { Component, OnInit } from '@angular/core';
import { Login } from '../login-module';
import { LoginService } from '../login.service';
import { studentService } from '../student-service';


@Component({
  selector: 'app-student-personal-details',
  templateUrl: './student-personal-details.component.html',
  styleUrls: ['./student-personal-details.component.css']
})
export class StudentPersonalDetailsComponent implements OnInit {
  profileInfo:any=""
  flag:boolean=false;
  constructor(public stuser:studentService) { }

  ngOnInit(): void {
  }

  profileDetails(email:string){
    this.flag=true;
    this.stuser.loadPersonalDetails(email).subscribe(data=>this.profileInfo=data);
  }
}
