import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username:string=""
  constructor(public router:Router) { }


  ngOnInit(): void {
    let obj = sessionStorage.getItem("name");
      if(obj!=null){
        this.username=obj;

  }
}
  logout(){
    sessionStorage.removeItem("name");
    this.router.navigate(["login"]);
  }


}
