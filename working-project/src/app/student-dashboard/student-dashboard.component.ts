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
  flagcheck:boolean=true;
  constructor(public router:Router) { }

  mail:any=sessionStorage.setItem("mail",this.obj)
   
  ngOnInit(): void {
    
    let obj = sessionStorage.getItem("name");
      if(obj!=null){
        this.username=obj;
        console.log("mail is"+obj)
       }
       sessionStorage.setItem("name1",this.username)
       

}

  logout(){
    this.flagcheck=false;
    sessionStorage.setItem("name1"," ");
    sessionStorage.removeItem("name");
    this.router.navigate(["login"]);
  }
}
