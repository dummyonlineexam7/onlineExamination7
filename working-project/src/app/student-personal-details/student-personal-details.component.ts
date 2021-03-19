import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  obj:any=sessionStorage.getItem("mail");
  flag:boolean=false;
  constructor(public stuser:studentService,public router:Router) { }

  ngOnInit(): void {
    this.flag=true;
     //this.obj=sessionStorage.getItem("email");
    // console.log(this.obj);
    this.stuser.loadPersonalDetails(this.obj).subscribe(data=>this.profileInfo=data);
  }
  
  updateRecord(firstname:any,lastname:any,gender:any,age:any,phnnumber:any,email:any,password:any){
    //firstname:any,lastname:any,gender:any,age:any,phnnumber:any,email:any
    sessionStorage.setItem("first",firstname),
    sessionStorage.setItem("last",lastname),
    sessionStorage.setItem("gender",gender),
    sessionStorage.setItem("age",age),
    sessionStorage.setItem("phn",phnnumber),
    sessionStorage.setItem("mail",email),
    sessionStorage.setItem("pass",password)

    this.router.navigate(["Update"])
  }

 //profileDetails(email:string){
  //  this.flag=true;
  //  this.stuser.loadPersonalDetails(email).subscribe(data=>this.profileInfo=data);
 // }
}
