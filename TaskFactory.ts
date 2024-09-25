// TaskFactory.ts

import { Task } from "./Task";

export class TaskFactory {
  public createTask(description: string, startTime: string, endTime: string, priority: string): Task {
    return new Task(description, startTime, endTime, priority);
  }
}
