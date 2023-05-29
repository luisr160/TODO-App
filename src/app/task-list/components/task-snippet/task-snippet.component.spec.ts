import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSnippetComponent } from './task-snippet.component';

describe('TaskSnippetComponent', () => {
  let component: TaskSnippetComponent;
  let fixture: ComponentFixture<TaskSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
