import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInsertComponent } from './test-insert.component';

describe('TestInsertComponent', () => {
  let component: TestInsertComponent;
  let fixture: ComponentFixture<TestInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
