import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-update',
  templateUrl: './test-update.component.html',
  styleUrls: ['./test-update.component.css']
})
export class TestUpdateComponent implements OnInit {
  msg:string=""
  constructor(public testsur:TestService) { }

  ngOnInit(): void {
  }

  updateTestData(testInfo:any){
    this.testsur.updateTestDetails(testInfo).subscribe(data=>this.msg=data)

  }

}
