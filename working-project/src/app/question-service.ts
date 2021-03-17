import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "./question-module";

@Injectable()
export class questionService{
    constructor(public http:HttpClient){}
    storeQuestion(questionRef:any):Observable<string>{
            return this.http.post("http://localhost:9090/question/addQuestion",questionRef,{responseType:"text"})
    
    }
    displayQuestions():Observable<Question[]>{
        return this.http.get<Question[]>("http://localhost:9090/question/getQuestion");
    }
    updateQuestion(questionRef:any):Observable<string>{
        return this.http.put("http://localhost:9090/question/updateQuestion",questionRef,{responseType:"text"});
    }
    
    deleteQuestion(qid:any):Observable<string>{

        return this.http.delete("http://localhost:9090/question/deleteQuestion/"+qid,{responseType:"text"})
    }

    getQuestionsBylevelandSubject(sname:string,level:string):Observable<Question[]>{
     console.log(sname ,level)
        return this.http.get<Question[]>("http://localhost:9090/question/getQuestionBylevel/"+sname+"/"+level);
    }
}