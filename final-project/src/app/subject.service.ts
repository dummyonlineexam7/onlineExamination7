import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Subject} from "./subject-module"

@Injectable({
  providedIn: 'root'
})


export class SubjectService {

  constructor(public httpClient:HttpClient) { }
  storeSubjectDetails(subjectRef:any):Observable<string>{
    return this.httpClient.post("http://localhost:9090/subject/storesubject",subjectRef,{responseType:"text"})
  }

  loadSubjectDetails():Observable<Subject[]>{
    return this.httpClient.get<Subject[]>("http://localhost:9090/subject/getsubject")
  }

  updateSubjectDetails(subjectRef:any):Observable<string>{
    return this.httpClient.put("http://localhost:9090/subject/updatesubject",subjectRef,{responseType:"text"})
  }
  deleteSubjectDetails(sid:any):Observable<string>{
    return this.httpClient.delete("http://localhost:9090/subject/deletesubject/"+sid,{responseType:"text"})
  }

}
