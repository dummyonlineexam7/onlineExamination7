import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg:string=""
  loginInfo=new FormGroup({
    email:new FormControl,
    password:new FormControl
  });
  constructor(public loginser:LoginService,public router:Router) { }

  ngOnInit(): void {
  }
  checkUser(){
    let loginRef=this.loginInfo.value;
    this.loginser.loginCheck(loginRef).subscribe(data=>this.msg=data);
   // this.stuser.updateStudentInfo(studentInfo).subscribe(data=>console.log(data))
  }

}
