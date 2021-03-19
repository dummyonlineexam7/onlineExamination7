import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { studentService } from '../student-service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  msg:string=""
 
  first:any
  last:any
  gender:any
  age:any
  phn:any
  mail:any
  pass:any


  constructor(public stuser:studentService,public router:Router) { }

  ngOnInit(): void {
    let firsts=sessionStorage.getItem("first")
    if(firsts!=null)
    {
      this.first=firsts;
    }

    let lasts=sessionStorage.getItem("last")
    if(lasts!=null)
    {
      this.last=lasts;
    }

    let gen=sessionStorage.getItem("gender")
    if(gen!=null)
    {
      this.gender=gen;
    }

    let ages=sessionStorage.getItem("age")
    if(ages!=null)
    {
      this.age=ages;
    }

    let phone=sessionStorage.getItem("phn")
    if(phone!=null)
    {
      this.phn=phone;
    }

    let email=sessionStorage.getItem("mail")
    if(email!=null)
    {
      this.mail=email;
    }

    let password =sessionStorage.getItem("pass")
    if(password!=null)
    {
      this.pass=password;
    }

  }
  updateProfile(loginInfo:any){
    this.stuser.updateProfileInfo(loginInfo).subscribe(data=>this.msg=data)
    //console.log(this.msg)
  }

  logout(){
    sessionStorage.removeItem("name");
    this.router.navigate(["login"]);
  }


  goback(){
    window.history.back();
  }
}
