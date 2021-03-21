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
   noofquestions:new FormControl()

  })
  QuestionInfo:Array<any>=[];
  settime:number=10;
  flag:boolean=false
  static flagt:boolean=true;
  score1:number=0;
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
  testname1:string=''
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
      this.score1=Math.floor((this.count/this.QuestionInfo.length)*100);
      this.testname1=this.sname1+"test";
      //this.testsur.loadTestDetails().subscribe(data=>this.testInfo=data)
      console.log("mail1:"+this.email1+" score:"+this.score1+" testname:"+this.testname1)
     console.log(this.testRecord.value)
     
     // this.testsur.storeTestDetails(testRef).subscribe(data=>this.msg=data)
      console.log("score is",this.count)
    }
    if(this.name.option==this.ques[this.i].answer && this.i!=this.QuestionInfo.length)
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
    this.testRecord.setValue({
      email:this.email1,
      testname:this.testname1,
      sid:this.sid1,
      qid:this.i,
      noofquestions:this.noofquestions1,
      score:this.score1
    })
    console.log("testrecord value "+this.testRecord.value)
    let testRef=this.testRecord.value
    console.log("mail1:"+this.email1+" score:"+this.score1+" testname:"+this.testname1)
    console.log(this.testRecord.value)
    this.testsur.storeTestDetails(testRef).subscribe(data=>console.log(data))
    console.log("testref value "+this.testRef.value)
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
