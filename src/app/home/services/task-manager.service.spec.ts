import { TestBed } from '@angular/core/testing';
import { v4 as uuid } from 'uuid';
import { TaskManagerService } from './task-manager.service';
import { Task_ } from '../interfaces/task.interface';
import { Category } from '../interfaces/categories.interface';

const testTaskList:Task_[] = [
  {
    id: 'pruebas',
    title:'Task 1',
    category: Category.Personal,
    description: 'Esto es una descripción de la prueba.',
    date:'2023-06-05',
    hour:'9:07',
    isCompleted : true,
    isExpired:false
  },
  {
    id: 'pruebas-del',
    title:'Task 2',
    category: Category.Work,
    description: 'Esto es una descripción de la prueba.',
    date:'2023-06-04',
    hour:'9:07',
    isCompleted : false,
    isExpired:false
  },
  {
    id: uuid(),
    title:'Task 3',
    category: Category.Shopping,
    description: 'Esto es una descripción de la prueba.',
    date:'2023-01-30',
    hour:'9:07',
    isCompleted : true,
    isExpired:false
  },
  {
    id: 'prueba-complete',
    title:'Task 4',
    category: Category.University,
    description: 'Esto es una descripción de la prueba.',
    date:'2023-06-06',
    hour:'9:07',
    isCompleted : false,
    isExpired:false
  },
  {
    id: uuid(),
    title:'Task 5',
    category: Category.Shopping,
    description: 'Esto es una descripción de la prueba.',
    date:'2023-06-06',
    hour:'9:07',
    isCompleted : false,
    isExpired:false
  }
];

const delTestTaskTemplate = {
  id: 'pruebas-del',
  title:'Task 2',
  category: Category.Work,
  description: 'Esto es una descripción de la prueba.',
  date:'2023-06-04',
  hour:'9:07',
  isCompleted : false,
  isExpired:false
}

const addTestTaskTemplate = {
  id: 'id-prueba-add',
  title:'prueba-add',
  category: Category.Personal,
  description: 'Esto es una descripción de la prueba.',
  date:'2023-06-04',
  hour:'9:07',
  isCompleted : false,
  isExpired:false
}

// let addTaskForm:FormGroup = new FormGroup({});

// const formBuilder:FormBuilder = new FormBuilder

// addTaskForm = formBuilder.group({
//   title:['prueba-add',Validators.required],
//   category:[Category.Personal,Validators.required],
//   description:['prueba12',Validators.required],
//   date:['2023-jun-19',Validators.required],
//   hour:['12:30',Validators.required],
//   isCompleted:[false],
//   isExpired: [false]
// })

describe('TaskManagerService', () => {
  let service: TaskManagerService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagerService);
    testTaskList.forEach( task => {
      service.addTask(task);
      console.log(task.id);
    });
    console.log(service.tasks)
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
    service.addTask(addTestTaskTemplate);
    const result = service.tasks.filter( task => task.id === addTestTaskTemplate.id).length;
    expect(result).toBe(1);
  });

  it('should successfully complete an specified task', () => {
    service.completeTask('prueba-complete',true);
    const result = service.searchTasks('Task 4')[0].isCompleted;
    expect(result).toBeTrue();
  });

  it('should successfully delete a specified task', () => {
    service.deleteTask('pruebas-del');
    const result = service.tasks.includes(delTestTaskTemplate);
    expect(result).toBeFalse();
  });

  afterEach(()=>{
    service.tasks.forEach(task => {
      console.log(task.id);
      service.deleteTask(task.id)
    })
    console.log(service.tasks);
  })
});
