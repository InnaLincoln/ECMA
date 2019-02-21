import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCheckingComponent } from './task-checking.component';

describe('TaskCheckingComponent', () => {
  let component: TaskCheckingComponent;
  let fixture: ComponentFixture<TaskCheckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCheckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
