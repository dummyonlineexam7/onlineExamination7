import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPassedStudentComponent } from './test-passed-student.component';

describe('TestPassedStudentComponent', () => {
  let component: TestPassedStudentComponent;
  let fixture: ComponentFixture<TestPassedStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPassedStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPassedStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
