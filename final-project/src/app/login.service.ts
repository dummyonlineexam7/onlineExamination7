import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login-module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }
  loginCheck(loginRef:any):Observable<string>{
    return this.http.post("http://localhost:9090/genericlogin",loginRef,{responseType:"text"})
  }

  signUpService(signUpRef:any):Observable<string>{
    return this.http.post("http://localhost:9090/signup",signUpRef,{responseType:"text"})
  }

  allRegisteredDetails():Observable<Login[]>{
    return this.http.get<Login[]>("http://localhost:9090/allregistered")
  }
}
