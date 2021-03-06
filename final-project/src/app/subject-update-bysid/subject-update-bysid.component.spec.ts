import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectUpdateBysidComponent } from './subject-update-bysid.component';

describe('SubjectUpdateBysidComponent', () => {
  let component: SubjectUpdateBysidComponent;
  let fixture: ComponentFixture<SubjectUpdateBysidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectUpdateBysidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectUpdateBysidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
