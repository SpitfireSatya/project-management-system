
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListAuthGuard } from './guards/task-list-auth.guard';

const routes: Routes = [
  {
    path: 'task-list',
    component: TaskListComponent,
    canActivate: [TaskListAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagerRoutingModule {}
