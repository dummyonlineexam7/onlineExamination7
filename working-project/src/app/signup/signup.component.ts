import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
msg:string=""
// signUpInfo=new FormGroup({
//   firstname:new FormControl,
//   lastname:new FormControl,
//   gender:new FormControl,
//   age:new FormControl,
//   phnnumber:new FormControl,
//   email:new FormControl,
//   password:new FormControl
//})
  constructor(public loginser:LoginService, private fb: FormBuilder) { }
  signUpInfo = this.fb.group({
    firstname:['', Validators.required],
    lastname:['', Validators.required],
    gender:['', Validators.required],
    age:['', Validators.required],
    phnnumber:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
  })
  ngOnInit(): void {
  }
  signUp(){
   // console.log(this.signUpInfo.value)
    if(this.signUpInfo.valid) {
    let signupRef=this.signUpInfo.value;
    this.loginser.signUpService(signupRef).subscribe(data=>this.msg=data);
   // this.stuser.updateStudentInfo(studentInfo).subscribe(data=>console.log(data))
  // console.log(this.signUpInfo.value)
    }
  }

  goback(){
    window.history.back();
  }

}
