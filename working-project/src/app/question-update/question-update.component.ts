import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { questionService } from '../question-service';

@Component({
  selector: 'app-question-update',
  templateUrl: './question-update.component.html',
  styleUrls: ['./question-update.component.css']
})
export class QuestionUpdateComponent implements OnInit {
msg:string="";

QuestionNo:any;
  Question:any;
  OptionA:any;
  OptionB:any;
  OptionC:any;
  OptionD:any;
  Answer:any;
  Subject:any;

  constructor(public questionService:questionService,public router:Router) { }

  ngOnInit(): void {
    let qqid=sessionStorage.getItem("QuestionNo")
    if(qqid!=null)
    {
      this.QuestionNo=qqid;
    }

    let ques=sessionStorage.getItem("Question")
    if(ques!=null)
    {
      this.Question=ques;
    }

    let opt1=sessionStorage.getItem("OptionA")
    if(opt1!=null)
    {
      this.OptionA=opt1;
    }

    let opt2=sessionStorage.getItem("OptionB")
    if(opt1!=null)
    {
      this.OptionB=opt2;
    }

    let opt3=sessionStorage.getItem("OptionC")
    if(opt3!=null)
    {
      this.OptionC=opt3;
    }

    let opt4=sessionStorage.getItem("OptionD")
    if(opt1!=null)
    {
      this.OptionD=opt4;
    }

    let ans=sessionStorage.getItem("Answer")
    if(ans!=null)
    {
      this.Answer=ans;
    }

    let ssid=sessionStorage.getItem("Subject")
    if(ssid!=null)
    {
      this.Subject=ssid;
    }
  }

  updateQuestionInfo(questionRef:any){
    this.questionService.updateQuestion(questionRef).subscribe(data=>this.msg=data);
    }

    logout(){
      sessionStorage.removeItem("name");
      this.router.navigate(["login"]);
    }
  
    goback(){
      window.history.back();
    }
  

  }
