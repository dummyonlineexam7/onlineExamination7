import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PassedStudent, TestDetails } from './test-module';

@Injectable({
  providedIn: 'root'
})


export class TestService {

  constructor(public httpClient:HttpClient) { }

  storeTestDetails(testRef:any):Observable<string>{
    return this.httpClient.post("http://localhost:9090/test/storetest",testRef,{responseType:"text"})
  }

  loadTestDetails():Observable<TestDetails[]>{
    return this.httpClient.get<TestDetails[]>("http://localhost:9090/test/gettest")
  }

  updateTestDetails(testRef:any):Observable<string>{
    return this.httpClient.put("http://localhost:9090/test/updatetest",testRef,{responseType:"text"})
  }
  
  deleteTestDetails(testid:any):Observable<string>{
    return this.httpClient.delete("http://localhost:9090/test/deletetest/"+testid,{responseType:"text"})
  }

  loadPassedStudentDetails(sname:any):Observable<PassedStudent[]>{
    return this.httpClient.get<PassedStudent[]>("http://localhost:9090/test/passedStudentList/"+sname);
  }


}
