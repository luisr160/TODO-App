import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskScrollerComponent } from './task-scroller.component';

describe('TaskScrollerComponent', () => {
  let component: TaskScrollerComponent;
  let fixture: ComponentFixture<TaskScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskScrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
