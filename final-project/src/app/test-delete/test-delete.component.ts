import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-delete',
  templateUrl: './test-delete.component.html',
  styleUrls: ['./test-delete.component.css']
})
export class TestDeleteComponent implements OnInit {

  msg:string=""
  constructor(public testsur:TestService) { }


  ngOnInit(): void {
  }

  deleteTestData(testid:any){
    this.testsur.deleteTestDetails(testid).subscribe(data=>this.msg=data)

  }
}
