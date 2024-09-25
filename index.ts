// index.ts

import { ScheduleManager } from "./ScheduleManager";
import { Observer } from "./Observer";

class ConsoleObserver implements Observer {
  update(message: string): void {
    console.log(message);
  }
}

const scheduleManager = ScheduleManager.getInstance();
const consoleObserver = new ConsoleObserver();
scheduleManager.addObserver(consoleObserver);

// Example usage
scheduleManager.addTask("Morning Exercise", "07:00", "08:00", "High");
scheduleManager.addTask("Team Meeting", "09:00", "10:00", "Medium");
scheduleManager.viewTasks();
// scheduleManager.removeTask("Morning Exercise");
scheduleManager.addTask("Lunch Break", "12:00", "13:00", "Low");
scheduleManager.viewTasks();
