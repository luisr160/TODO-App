import { Injectable } from '@angular/core';
import { Task_ } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  private _taskList:Task_[] = [
    {
      title:'Task 1',
      category: 'todo',
      description: 'Esto es una descripción de la prueba.',
      date:'30/05/2023',
      hour:'9:07'
    },
    {
      title:'Task 2',
      category: 'ongoing',
      description: 'Esto es una descripción de la prueba.',
      date:'30/05/2023',
      hour:'9:07'
    },
    {
      title:'Task 3',
      category: 'done',
      description: 'Esto es una descripción de la prueba.',
      date:'30/05/2023',
      hour:'9:07'
    },
    {
      title:'Task 4',
      category: 'todo',
      description: 'Esto es una descripción de la prueba.',
      date:'30/05/2023',
      hour:'9:07'
    }
  ]

  constructor() { }

  get tasks(){
    return [...this._taskList]
  }
}
