// Task.ts

export class Task {
    private description: string;
    private startTime: string;
    private endTime: string;
    private priority: string;
  
    constructor(description: string, startTime: string, endTime: string, priority: string) {
      this.description = description;
      this.startTime = startTime;
      this.endTime = endTime;
      this.priority = priority;
    }
  
    public getDescription(): string {
      return this.description;
    }
  
    public getStartTime(): string {
      return this.startTime;
    }
  
    public getEndTime(): string {
      return this.endTime;
    }
  
    public getPriority(): string {
      return this.priority;
    }
  }
  