/** Entity class representing a task */
export class TaskModel {
  static lastKey = 0;

  title;
  description;
  dueDate;
  priority;
  key;

  /**
   * Create a task object
   * @param {string} title - the title of the task
   * @param {string} description - brief description of the task (optional)
   * @param {Date} dueDate - the due date of the task (optional)
   * @param {import("./../priority").default} priority - the priority of the taks (optional)
   */
  constructor({ title, description = null, dueDate = null, priority = null }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    this.done = false;

    this.key = this.key = ++TaskModel.lastKey;
  }
}
