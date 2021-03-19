import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  username:string=""
  obj:any=sessionStorage.getItem("name");
  constructor(public router:Router) { }

  mail:any=sessionStorage.setItem("mail",this.obj)
   
  ngOnInit(): void {
    //this.obj = sessionStorage.getItem("name");
      if(this.obj!=null){
        this.username=this.obj;
  }
}

  logout(){
    sessionStorage.removeItem("name");
    this.router.navigate(["login"]);
  }
}
