
export interface ITask {
  taskName: string;
  owner: string;
  status: 'completed' | 'in-progress' | 'blocked'
}
