import {TaskModel} from "./taskModel.js";

/** 
 * A todo list of tasks
 * @property {Array.<TaskModel>} tasks - an array of task objects
*/
export class TodoListModel {

    localStorageAvailable = (typeof(Storage) !== "undefined");

    /**
     * initialize the todo list
     */
    constructor() {
        this.tasks = [];

        if (this.localStorageAvailable) {
            this.tasks = (localStorage.getItem("tasks") != null) ? this.restoreList() : [];
        }
    }

    /**
     * Append a task to the end of the list
     * @param {TaskModel} task - a task object
     */
    push(task) {
        this.tasks.push(task);

        if (this.localStorageAvailable) { this.saveList(); }
    }

    /**
     * Extend the task list by appending each element in the given list
     * @param {Array.<Task>} listTasks - an array of task objects
     */
    extend(listTasks) {
        listTasks.forEach(element => {
            this.push(element);
        });
        if (this.localStorageAvailable) { this.saveList(); }
    }

    /**
     * pop either the last task from the list or the task at a given index
     * @param {Number} index (optional) the index to pop
     * @returns the popped task
     */
    pop(index = null) {
        if (index) {
           this.splice(index, 1)[0];
        } else {
            const a = this.tasks.pop();
            if (this.localStorageAvailable) { this.saveList(); }
            return a;
        }
    }

    remove(taskKey) {
        this.tasks = this.tasks.filter(task => {
            return task.key != taskKey;
        });
        if (this.localStorageAvailable) { this.saveList(); }
    }

    splice(index = null) {
        const a = this.tasks.splice(index,1)[0];
        if (this.localStorageAvailable) { this.saveList(); }
        return a;
    }

    /** 
     * @returns the length of the todo list
     */
    len() {
        return this.tasks.length;
    }

    log() {
        console.table(this.tasks);
    }

    /**
     * Save the list of tasks to local storage if available
     */
    saveList() {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        } else {
            console.warn("no local storage");
        }
    }
    
    /**
     * restore the list of tasks from local storage if available.
     */
    restoreList() {
        let storage;
        if (typeof(Storage) !== "undefined") {
            storage = JSON.parse(localStorage.getItem("tasks"));
        } else {
            console.warn("no local storage");
            return;
        }
        // task keys are important, so we avoid having duplicate keys
        TaskModel.lastKey = Math.max(...storage.map(t => t.key));
        return storage;
    }

}