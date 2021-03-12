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
  flag:boolean=false
  i:number=0

  count:number=0
  testRef=new FormGroup({
    option:new FormControl()
  })
   name:any;
  sname:string=""
  level:string=""
  ques:Array<Question>=[]
  msg:string="You are already in last question"
  constructor(public taketestSur:questionService, private router:Router) { }

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
    
    this.QuestionInfo.length=0
    this.flag=true
    this.taketestSur.getQuestionsBylevelandSubject(this.sname,this.level).subscribe(data=>{
      if(data!=null){
        this.flag=true;
        this.QuestionInfo=data;
        this.ques=this.QuestionInfo
       // console.log(this.QuestionInfo.ans)
        //console.log(this.QuestionInfo[this.i]?.answer)
      }

    });
   // console.log(this.name.option)
  }
  
  nextquestion(){
    this.name=this.testRef.value
    console.log("iterator value",this.i)
    //console.log(this.name.option)
    
    if(this.name.option==this.ques[this.i].answer)
    {
     
      this.count++;
      if(this.i==this.QuestionInfo.length-1)
      {
        console.log("score is",this.count)
      }
      
    }
     this.i++;
     //console.log(this.i)
  }
  previousquestion(){
    this.i--;
  }
  
  GoToQuestion1(){
    //console.log(this.ques[0])
    //this.j++;
    this.i=0;
  }
  GoToQuestion2(){ 
    //console.log(this.ques[1])
    this.i=1
  }
  GoToQuestion3(){
    //console.log(this.ques[2])
    this.i=2
  }

  // GoToLogin(){
  //   this.router.navigate(['login'])
  //   alert(this.count)
  // }
  

}
