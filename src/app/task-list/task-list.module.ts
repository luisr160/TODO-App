import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskSnippetComponent } from './components/task-snippet/task-snippet.component';



@NgModule({
  declarations: [
    TaskListPageComponent,
    TaskSnippetComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TaskListPageComponent
  ]
})
export class TaskListModule { }
