import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-insert',
  templateUrl: './test-insert.component.html',
  styleUrls: ['./test-insert.component.css']
})
export class TestInsertComponent implements OnInit {

  testInfo=new FormGroup({
    testid:new FormControl(),
    score:new FormControl(),
    sid:new FormControl(),
    stuid:new FormControl(),
    qid:new FormControl(),
    status:new FormControl()
  });
  msg:string=""
  constructor(public testsur:TestService) {}

  ngOnInit(): void {
  }

  storeTestDetails(){
    let testRef=this.testInfo.value;
    this.testsur.storeTestDetails(testRef).subscribe(data=>this.msg=data)
  }

}
