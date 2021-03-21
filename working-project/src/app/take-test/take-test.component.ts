import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../question-module';
import { questionService } from '../question-service';
import { TestDetails } from '../test-module';
import { TestService } from '../test.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit{
  testRecord=new FormGroup({
    email: new FormControl(),
    qid: new FormControl(),
    sid: new FormControl(),
    score: new FormControl(),
    testname: new FormControl(),
    status: new FormControl()


  })
  QuestionInfo:Array<any>=[];
  settime:number=10;
  flag:boolean=false
  static flagt:boolean=true;
  score:number=0;
  static result:boolean=false;
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
  sname1:string=""
  level1:string=""
  sid1:number=0
  email1:string=''
  noofquestions1:number=0
  testInfo:Array<TestDetails>=[]
  questioncount:Array<number>=[]
  ques:Array<Question>=[]

  msg:string="You are already in last question"
  constructor(public taketestSur:questionService, private router:Router, public testsur:TestService) { }

  //msg:string="You are in last question"
 // constructor(public taketestSur:questionService, public router:Router) { }



  ngOnInit(): void {
    
     let a=sessionStorage.getItem("obj")
     let b=sessionStorage.getItem("obj1")
     let c=sessionStorage.getItem("obj2")
     let d=sessionStorage.getItem("name")
    if(a!=null && b!=null && c!=null && d!=null){
    this.sname1=a;
    this.level1=b;
    this.sid1=parseInt(c);
    this.email1=d;
    } 

   
  }

  
  
  Test(){
    this.k=1;
    this.flag2=false
    this.QuestionInfo.length=0
    this.flag=true
    this.taketestSur.getQuestionsBylevelandSubject(this.sname1,this.level1).subscribe(data=>{
      if(data!=null){
        this.flag=true;
        this.QuestionInfo=data;
        this.ques=this.QuestionInfo
        this.noofquestions1=this.QuestionInfo.length
        console.log(this.noofquestions1)
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
      this.score=Math.floor((this.count/this.QuestionInfo.length)*100);
      this.testsur.loadTestDetails().subscribe(data=>this.testInfo=data)
      this.testInfo[0].email=this.email1
      this.testInfo[0].level=this.level1
      console.log(this.testInfo[0])
      console.log(this.email1)
      this.testsur.storeTestDetails().subscribe(data=>this.msg=data)
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
 
  GoToStudent(){
    this.router.navigate(["studentdasboard"])
  }
  

  checktimeout(){

    setTimeout(function(){
      if(TakeTestComponent.flagt){
        console.log(TakeTestComponent.flagt);
        TakeTestComponent.result=confirm("Time Out !!!")
      }
      
    },(this.settime*1000));
    console.log(TakeTestComponent.result);
    if(TakeTestComponent.result==true)
      {
        console.log(TakeTestComponent.result);
        this.router.navigate(["studentdasboard"])
      }
  }
  

}
