import {TaskModel} from "./taskModel.js";

/** 
 * A todo list of tasks
 * @property {Array.<TaskModel>} tasks - an array of task objects
*/
export class TodoListModel {

    /**
     * initialize the todo list
     */
    constructor() {
        this.tasks = [];
    }

    /**
     * Append a task to the end of the list
     * @param {TaskModel} task - a task object
     */
    push(task) {
        this.tasks.push(task);
    }

    /**
     * Extend the task list by appending each element in the given list
     * @param {Array.<Task>} listTasks - an array of task objects
     */
    extend(listTasks) {
        listTasks.forEach(element => {
            this.push(element);
        });
    }

    /**
     * pop either the last task from the list or the task at a given index
     * @param {Number} index (optional) the index to pop
     * @returns the popped task
     */
    pop(index = null) {
        if (index) {
            return this.tasks.splice(index, 1)[0];
        } else {
            return this.tasks.pop();
        }
    }

    /** 
     * @returns the length of the todo list
     */
    len() {
        return this.tasks.length;
    }

}