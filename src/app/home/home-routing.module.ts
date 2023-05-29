import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TaskListPageComponent } from '../task-list/pages/task-list-page/task-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'list',
    component: TaskListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
