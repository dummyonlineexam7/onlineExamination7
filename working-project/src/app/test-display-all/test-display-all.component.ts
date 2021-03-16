import { Component, OnInit } from '@angular/core';
import {TestDetails} from '../test-module'
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-display-all',
  templateUrl: './test-display-all.component.html',
  styleUrls: ['./test-display-all.component.css']
})
export class TestDisplayAllComponent implements OnInit {
  testInfo:Array<TestDetails>=[]
  flag:boolean=false
  constructor(public testsur:TestService) { }

  ngOnInit(): void {
  }

  loadTestData(){
    this.flag=true;
    this.testsur.loadTestDetails().subscribe(data=>this.testInfo=data);
  }

}
