import { Component, OnInit } from '@angular/core';
import { Task_ } from '../../interfaces/task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public newTaskData:Task_ = {
    title:'',
    category:'',
    description:'',
    date:'',
    hour:'',
    isCompleted:false
  }

  constructor() { }

  // public get isValidForm():boolean{
  //   const {title,category,description,date,hour} = {...this.newTaskData};
  //   console.log({title,category,description,date,hour});
  //   if(title === '' && category === '' && description === '' && date === '' && hour === '' ){
  //     return false;
  //   }
  //   return true;
  // }

  ngOnInit(): void {
  }

  submitForm():void{

  }

}
