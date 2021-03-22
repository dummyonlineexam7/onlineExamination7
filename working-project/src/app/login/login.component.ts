import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg:string=""
flag:boolean=false
 
  constructor(public loginser:LoginService,public router:Router,public router1:Router, private fb: FormBuilder) { }
  loginInfo = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  })
  ngOnInit(): void {
  }
  checkUser(){
    if(this.loginInfo.valid)
    {
    let loginRef=this.loginInfo.value;
    this.loginser.loginCheck(loginRef).subscribe(data=>{
      
      if(data=="Login Successfull")
      {
       if(loginRef.email=="admin@gmail.com")
      {
        sessionStorage.setItem("name",loginRef.email)
        this.router.navigate(["admindashboard"])
       }
       else{
        console.log(loginRef.email)
        sessionStorage.setItem("name",loginRef.email)
        this.router.navigate(["studentdasboard"])
       }
      }
      else
      {
        this.flag=true
          this.msg=data;
      }
    });
   
  }
  }
}
