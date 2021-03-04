import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDisplayAllComponent } from './subject-display-all.component';

describe('SubjectDisplayAllComponent', () => {
  let component: SubjectDisplayAllComponent;
  let fixture: ComponentFixture<SubjectDisplayAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDisplayAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDisplayAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
