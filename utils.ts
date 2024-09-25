// utils.ts

import { Task } from "./Task";

export function sortTasksByStartTime(tasks: Task[]): Task[] {
  return tasks.slice().sort((a, b) => {
    if (a.getStartTime() < b.getStartTime()) return -1;
    if (a.getStartTime() > b.getStartTime()) return 1;
    return 0;
  });
}
