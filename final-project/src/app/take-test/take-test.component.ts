import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../question-module';
import { questionService } from '../question-service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {

  Question:Array<any>=[];
  flag:boolean=false
  i:number=0
  myRadio:string=""
  testRef=new FormGroup({
    sname:new FormControl(),
    level:new FormControl(),
  })
   name:any
  
  msg:string="You are already in last question"
  constructor(public taketestSur:questionService) { }

  ngOnInit(): void {
    let obj1=sessionStorage.getItem("obj")
    if(obj1!=null){
    this.Question=obj1;
    } 
  }
  
  
  nextquestion(){
    console.log(this.name.option)
     this.i++;
  }
  previousquestion(){
    this.i--;
  }
  
  calculatemarks(){
    //this.selectedanswer=document.getElementsByName('option');
  }

}
