import { Component, Input, OnInit } from '@angular/core';
import { Task_ } from 'src/app/home/interfaces/task.interface';

@Component({
  selector: 'app-task-snippet',
  templateUrl: './task-snippet.component.html',
  styleUrls: ['./task-snippet.component.css']
})
export class TaskSnippetComponent implements OnInit {

  @Input()
  public snippetTask!:Task_;

  constructor() { }

  ngOnInit(): void {
  }

}
