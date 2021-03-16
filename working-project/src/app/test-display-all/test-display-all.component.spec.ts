import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDisplayAllComponent } from './test-display-all.component';

describe('TestDisplayAllComponent', () => {
  let component: TestDisplayAllComponent;
  let fixture: ComponentFixture<TestDisplayAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDisplayAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDisplayAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
