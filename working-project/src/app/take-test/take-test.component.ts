import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../question-module';
import { questionService } from '../question-service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit{

  QuestionInfo:Array<any>=[];
  settime:number=10;
  flag:boolean=false
  static flagt:boolean=true;

  i:number=0
  k:number=0
flag1:boolean=true
flag2:boolean=true
flag3:boolean=true
flag4:boolean=false
  count:number=0
  testRef=new FormGroup({
    option:new FormControl()
  })
   name:any;
  sname:string=""
  level:string=""
  noofquestions:number=0
  questioncount:Array<number>=[]
  ques:Array<Question>=[]
  msg:string="You are in last question"
  constructor(public taketestSur:questionService, public router:Router) { }


  ngOnInit(): void {
    
     let a=sessionStorage.getItem("obj")
     let b=sessionStorage.getItem("obj1")
    if(a!=null && b!=null){
    this.sname=a;
    this.level=b;
    console.log(this.sname)
    console.log(this.level)

    } 

   
  }

  
  
  Test(){
    this.k=1;
    this.flag2=false
    this.QuestionInfo.length=0
    this.flag=true
    this.taketestSur.getQuestionsBylevelandSubject(this.sname,this.level).subscribe(data=>{
      if(data!=null){
        this.flag=true;
        this.QuestionInfo=data;
        this.ques=this.QuestionInfo
        this.noofquestions=this.QuestionInfo.length
        console.log(this.noofquestions)
        //console.log(this.QuestionInfo[this.i]?.answer)
        for(let j=0;j<this.QuestionInfo.length;j++)
        {
          this.questioncount[j]=j;
        }
        console.log("loop for quescount"+this.questioncount)
      }

    });
   // console.log(this.name.option)
  }
  
  nextquestion(){
    TakeTestComponent.flagt=false;
    this.name=this.testRef.value
    console.log("iterator value",this.i)
    //console.log(this.name.option)
    if(this.i>=this.QuestionInfo.length-1)
    {
      if(this.name.option==this.ques[this.i].answer)
      {
        this.count++;
      }
      this.i=this.QuestionInfo.length
      this.flag1=false
      this.flag2=false
      this.flag=false
      this.flag3=false
      this.flag4=true
      console.log("score is",this.count)
    }
    if(this.name.option==this.ques[this.i].answer)
    {
     
      this.count++;
      
    }
     this.i++;
     //console.log(this.i)
  }
  previousquestion(){
    this.i--;
  }
  
  GoToQuestion1(val:number){
    //console.log(this.ques[0])
    //this.j++;
    console.log(val)
    this.i=val;
  }
 
  
  

  checktimeout(){
    setTimeout(function(){
      if(TakeTestComponent.flagt){
      alert("Time Out !!!")
      }
      // router.navigate(["studentdasboard"])
    },(this.settime*1000));
  }
  

}
