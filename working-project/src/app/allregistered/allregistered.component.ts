import { Component, OnInit } from '@angular/core';
import { Login } from '../login-module';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-allregistered',
  templateUrl: './allregistered.component.html',
  styleUrls: ['./allregistered.component.css']
})
export class AllregisteredComponent implements OnInit {
  registeredInfo:Array<Login>=[];
  flag:boolean=false
  constructor(public loginser:LoginService) { }

  ngOnInit(): void {
    this.loginser.allRegisteredDetails().subscribe(data=>{
      if(data!=null)
      {this.registeredInfo=data}
      console.log(this.registeredInfo)
    })
  }

  
}
