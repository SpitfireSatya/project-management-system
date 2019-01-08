
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListService } from './components/task-list/task-list.service';
import { TaskListAuthGuard } from './guards/task-list-auth.guard';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TaskManagerRoutingModule
  ],
  declarations: [
    TaskListComponent
  ],
  providers: [
    TaskListService,
    TaskListAuthGuard
  ]
})
export class TaskManagerModule { }
