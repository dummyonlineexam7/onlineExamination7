import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNotAttemptComponent } from './test-not-attempt.component';

describe('TestNotAttemptComponent', () => {
  let component: TestNotAttemptComponent;
  let fixture: ComponentFixture<TestNotAttemptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNotAttemptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNotAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
