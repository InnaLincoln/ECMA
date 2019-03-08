import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddingComponent } from './task-adding.component';

describe('TaskAddingComponent', () => {
  let component: TaskAddingComponent;
  let fixture: ComponentFixture<TaskAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
