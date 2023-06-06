import { Component, OnInit } from '@angular/core';
import { Task_ } from '../../interfaces/task.interface';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TaskManagerService } from '../../services/task-manager.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public today:string = format(new Date(), "yyyy-LL-dd");

  public addTaskForm:FormGroup = new FormGroup({});
  
  public newTaskData:Task_ = {
    id:'',
    title:'',
    category:'',
    description:'',
    date:'',
    hour:'',
    isCompleted:false
  }

  constructor(private formBuilder:FormBuilder, private modalCtrl:ModalController, private taskManager:TaskManagerService) { }

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      title:['',Validators.required],
      category:['',Validators.required],
      description:['',Validators.required],
      date:['',Validators.required],
      hour:['',Validators.required],
    })
  }

  public onCancel():Promise<boolean>{
    console.log(this.addTaskForm.value)
    this.addTaskForm.reset();
    return this.modalCtrl.dismiss(null,'cancel');
  }

  submitForm():Promise<boolean>{
    this.newTaskData.title = this.newTaskData.title.toLowerCase();
    this.taskManager.addTask(this.newTaskData);
    this.addTaskForm.reset();
    return this.modalCtrl.dismiss(null,'cancel');
  }
}
