// ScheduleManager.ts

import { Task } from "./Task";
import { Observer } from "./Observer";
import { TaskFactory } from "./TaskFactory";
import { sortTasksByStartTime } from "./utils";

export class ScheduleManager {
  private static instance: ScheduleManager;
  private tasks: Task[] = [];
  private observers: Observer[] = [];

  private constructor() {}

  public static getInstance(): ScheduleManager {
    if (!ScheduleManager.instance) {
      ScheduleManager.instance = new ScheduleManager();
    }
    return ScheduleManager.instance;
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public addTask(description: string, startTime: string, endTime: string, priority: string): void {
    const taskFactory = new TaskFactory();
    const newTask = taskFactory.createTask(description, startTime, endTime, priority);

    if (!this.isOverlapping(newTask)) {
      this.tasks.push(newTask);
      this.notifyObservers(`Task added successfully. No conflicts.`);
    } else {
      this.notifyObservers(`Error: Task conflicts with existing tasks.`);
    }
  }

//   public removeTask(description: string): void {
//     const index = this.tasks.findIndex(task => task.getDescription() === description);
//     if (index !== -1) {
//       this.tasks.splice(index, 1);
//       this.notifyObservers(`Task removed successfully.`);
//     } else {
//       this.notifyObservers(`Error: Task not found.`);
//     }
//   }

  public viewTasks(): void {
    const sortedTasks = sortTasksByStartTime(this.tasks);
    if (sortedTasks.length === 0) {
      console.log(`No tasks scheduled for the day.`);
    } else {
      sortedTasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.getStartTime()} - ${task.getEndTime()}: ${task.getDescription()} [${task.getPriority()}]`);
      });
    }
  }

  private isOverlapping(newTask: Task): boolean {
    for (const task of this.tasks) {
      if (task.getStartTime() < newTask.getEndTime() && newTask.getStartTime() < task.getEndTime()) {
        return true;
      }
    }
    return false;
  }

  private notifyObservers(message: string): void {
    this.observers.forEach(observer => observer.update(message));
  }
}
