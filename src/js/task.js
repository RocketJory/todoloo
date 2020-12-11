import {Priority} from "./priority.js";

/** Entity class representing a task */
export class Task {

    /**
     * Create a task object
     * @param {string} title - the title of the task
     * @param {string} description - brief description of the task (optional)
     * @param {Date} dueDate - the due date of the task (optional)
     * @param {Priority} priority - the priority of the taks (optional)
     */
    constructor({title, description = null, dueDate = null, priority = null}) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    
}