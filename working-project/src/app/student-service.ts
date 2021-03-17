import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Student} from "./student-module"
import { Login } from "./login-module";
/*@Injectable()
export class studentDisplayService{
    constructor(public http:HttpClient){}
    loadStudentDisplay():void{
        this.http.get("http://localhost:9090/student/display").subscribe(val=>console.log(val),
        error=>console.log(error),
        ()=>console.log("Complete")
        );
    }
}*/
@Injectable()
export class studentService{
    constructor(public http:HttpClient){}
    loadStudentDisplay():Observable<Student[]>{
        return this.http.get<Student[]>("http://localhost:9090/student/display")
        
    }
    storeStudentInfo(studentRef:any):Observable<string>{
        return this.http.post("http://localhost:9090/student/insert",studentRef,{responseType:"text"})
      }

      updateStudentInfo(studentRef:any):Observable<string>{
        console.log(studentRef)
        return this.http.put("http://localhost:9090/student/update",studentRef,{responseType:"text"})
      }
      deleteStudentInfo(stuid:any):Observable<string>{
        return this.http.delete("http://localhost:9090/student/delete/"+stuid,{responseType:"text"})
      }

      loadPersonalDetails(email:string):Observable<Login>{
        return this.http.get<Login>("http://localhost:9090/student/personal/"+email)
        
    }

    updateProfileInfo(loginRef:any):Observable<string>{
      return this.http.put("http://localhost:9090/student/updateprofile",loginRef,{responseType:"text"})
    }
}