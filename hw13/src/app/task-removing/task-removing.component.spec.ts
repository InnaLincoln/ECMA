import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRemovingComponent } from './task-removing.component';

describe('TaskRemovingComponent', () => {
  let component: TaskRemovingComponent;
  let fixture: ComponentFixture<TaskRemovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRemovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRemovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
