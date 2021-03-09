import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllregisteredComponent } from './allregistered.component';

describe('AllregisteredComponent', () => {
  let component: AllregisteredComponent;
  let fixture: ComponentFixture<AllregisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllregisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
