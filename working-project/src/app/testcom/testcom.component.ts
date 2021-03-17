import { Component, OnInit } from '@angular/core';
import { TestDetails } from '../test-module';
import { TestService } from '../test.service';

@Component({
  selector: 'app-testcom',
  templateUrl: './testcom.component.html',
  styleUrls: ['./testcom.component.css']
})
export class TestcomComponent implements OnInit {
  testInfo:Array<TestDetails>=[]
  constructor(public testsur:TestService) { }

  ngOnInit(): void {
    this.testsur.loadTestDetails().subscribe(data=>this.testInfo=data);
  }

}
