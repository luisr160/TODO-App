import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListPageComponent } from './task-list-page.component';
import { TaskManagerService } from 'src/app/home/services/task-manager.service';

describe('TaskListPageComponent', () => {
  let component: TaskListPageComponent;
  let fixture: ComponentFixture<TaskListPageComponent>;
  let service: TaskManagerService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListPageComponent ],
      providers: [TaskManagerService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(TaskManagerService);  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should succesfully call deleteTask method on delete event', () => {
    const id = 'whatever'
    const spy = spyOn(service, 'deleteTask');

    component.deleteTasks(id);
    expect(spy).toHaveBeenCalled();
  });
});
