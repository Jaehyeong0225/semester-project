class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }

  markCompleted() {
    this.completed = true;
  }

  displayTask() {
    return `${this.title} - ${this.description} (Due: ${this.dueDate}) - ${this.completed ? "Completed" : "In Progress"}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const task1 = new Task("Bake Cookies", "Make a batch of banana pudding cookies");

  const completeBtn = document.getElementById("completeBtn");
  const taskOutput = document.getElementById("taskOutput");

  taskOutput.textContent = task1.displayTask();

  completeBtn.addEventListener("click", () => {
    task1.markCompleted();
    taskOutput.textContent = task1.displayTask();
  });
});
