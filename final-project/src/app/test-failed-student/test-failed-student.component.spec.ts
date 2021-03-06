import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFailedStudentComponent } from './test-failed-student.component';

describe('TestFailedStudentComponent', () => {
  let component: TestFailedStudentComponent;
  let fixture: ComponentFixture<TestFailedStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFailedStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFailedStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
