
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from "../../interfaces/task.interface";

@Injectable()
export class TaskListService {

  private _taskList: Array<ITask> = [
    { taskName: 'task 1', owner: 'admin', status: 'completed' },
    { taskName: 'task 2', owner: 'admin', status: 'completed' },
    { taskName: 'task 3', owner: 'admin', status: 'blocked' },
    { taskName: 'task 4', owner: 'admin', status: 'in-progress' },
    { taskName: 'task 5', owner: 'admin', status: 'in-progress' },
    { taskName: 'task 6', owner: 'admin', status: 'completed' },
    { taskName: 'task 7', owner: 'admin', status: 'blocked' },
    { taskName: 'task 8', owner: 'admin', status: 'in-progress' },
    { taskName: 'task 9', owner: 'admin', status: 'completed' },
    { taskName: 'task 10', owner: 'admin', status: 'blocked' },
  ]

  public getTasks(): Observable<Array<ITask>> {
    return of(this._taskList.slice());
  }

}
