import { TestBed } from '@angular/core/testing';
import { v4 as uuid } from 'uuid';
import { TaskManagerService } from './task-manager.service';
import { Task_ } from '../interfaces/task.interface';
import { Category } from '../interfaces/categories.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const test_id = 'DFSGYHFs-HYFGSEHU-SDGIHLD';

const delTestTask = {
  id: 'pruebas-del',
  title:'Task 2',
  category: Category.Work,
  description: 'Esto es una descripción de la prueba.',
  date:'2023-06-04',
  hour:'9:07',
  isCompleted : false,
  isExpired:false
}

let addTaskForm:FormGroup = new FormGroup({});

const formBuilder:FormBuilder = new FormBuilder

addTaskForm = formBuilder.group({
  title:['prueba-add',Validators.required],
  category:[Category.Personal,Validators.required],
  description:['prueba12',Validators.required],
  date:['2023-jun-19',Validators.required],
  hour:['12:30',Validators.required],
  isCompleted:[false],
  isExpired: [false]
})

describe('TaskManagerService', () => {
  let service: TaskManagerService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of one element', () => {
    const response = service.searchTasks('task 4')
    expect(response.length).toBe(1);
  });

  it('should return an array of two elements', () => {
    const response = service.searchTasks('compras')
    expect(response.length).toBe(2);
  });

  it('should successfully add an specified task', () => {
    service.addTask({...addTaskForm.value});
    const id = service.searchTasks('prueba-add')[0].id;
    console.log(id)
    const result = service.tasks.filter( task => task.id === id).length;
    expect(result).toBe(1);
  });

  it('should successfully complete an specified task', () => {
    service.completeTask('prueba-complete',true);
    const result = service.searchTasks('Task 4')[0].isCompleted;
    expect(result).toBeTrue();
  });

  it('should successfully delete a specified task', () => {
    service.deleteTask('pruebas-del');
    const result = service.tasks.includes(delTestTask);
    expect(result).toBeFalse();
  });
});
