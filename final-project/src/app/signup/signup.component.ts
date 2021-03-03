import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
msg:string=""
signUpInfo=new FormGroup({
  firstname:new FormControl,
  lastname:new FormControl,
  gender:new FormControl,
  age:new FormControl,
  phnnumber:new FormControl,
  email:new FormControl,
  password:new FormControl

})
  constructor(public loginser:LoginService) { }

  ngOnInit(): void {
  }
  signUp(){
    let signupRef=this.signUpInfo.value;
    this.loginser.signUpService(signupRef).subscribe(data=>this.msg=data);
   // this.stuser.updateStudentInfo(studentInfo).subscribe(data=>console.log(data))
  }

}
