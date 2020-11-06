/* eslint-disable func-style */

function newTask(title, description) {
  const task = {
    title : title,
    description: description,
    completer: false,

    markComplete: function() {
      task.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };

  return task;

}



const task0 = newTask("Clean Cat Litter"); // task 0
const task1 = newTask("Do Laundry"); // task 1
const tasks = [task0, task1];

task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed
