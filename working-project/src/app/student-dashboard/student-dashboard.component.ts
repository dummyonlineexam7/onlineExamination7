import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  username:string=""
  constructor(public router:Router) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("name");
      if(obj!=null){
        this.username=obj;
        console.log("mail is"+obj)
       }
       sessionStorage.setItem("name1",this.username)
       
}
  logout(){
    sessionStorage.removeItem("name");
    this.router.navigate(["login"]);
  }
}
