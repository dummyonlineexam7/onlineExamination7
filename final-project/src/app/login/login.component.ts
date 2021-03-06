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
msg:string="Login Successfull"
flag:boolean=false
  loginInfo=new FormGroup({
    email:new FormControl,
    password:new FormControl
  });
  constructor(public loginser:LoginService,public router:Router,public router1:Router) { }

  ngOnInit(): void {
  }
  checkUser(){
    let loginRef=this.loginInfo.value;
    this.loginser.loginCheck(loginRef).subscribe(data=>{
      
      if(data=="Login Successfull")
      {
       // this.flag=true;
       console.log(data)
       console.log(loginRef.email)
       if(loginRef.email=="admin@gmail.com")
      {
        console.log(loginRef.email)
        sessionStorage.setItem("name",loginRef.email)
        this.router.navigate(["admindashboard"])
        //this.router1.navigate(["admindashboard"])
       }
       else{
        console.log(loginRef.email)
        sessionStorage.setItem("name",loginRef.email)
        this.router.navigate(["studentdasboard"])
        
       }
       //this.router1.navigate(["admindashboard"])
      }
    });
   
  }

}
