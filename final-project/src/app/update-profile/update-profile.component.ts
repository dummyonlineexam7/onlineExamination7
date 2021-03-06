import { Component, OnInit } from '@angular/core';
import { studentService } from '../student-service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  msg:string=""
  constructor(public stuser:studentService) { }

  ngOnInit(): void {
  }
  updateProfile(loginInfo:any){
    this.stuser.updateProfileInfo(loginInfo).subscribe(data=>this.msg=data)
    console.log(this.msg)
  }
}
