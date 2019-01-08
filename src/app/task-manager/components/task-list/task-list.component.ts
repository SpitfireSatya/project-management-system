import { TaskListService } from './task-list.service';

import { Component, OnInit } from '@angular/core';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public taskList: Array<ITask> = []

  constructor(private taskListService: TaskListService) { }

  public ngOnInit() {
    this.taskListService.getTasks()
      .subscribe((taskList: Array<ITask>) => {
        this.taskList = taskList;
      });
  }

}
