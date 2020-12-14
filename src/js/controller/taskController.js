import {TaskView} from "./../view/taskView.js";
import {TaskModel} from "./../model/taskModel.js";

/** Controller for a single task */
export class TaskController {

    /**
     * init controller and register events
     * @param {TaskModel} taskModel 
     * @param {TaskView} taskView 
     */
    constructor(taskModel, taskView) {
        this.task = taskModel;
        this.taskView = taskView;
    }

    /**
     * Attach the current task to DOM, register events
     */
    render() {
        this.taskView.render();

        this.taskView.checkbox.addEventListener("click", (e) => {
            this.toggleTaskStatus();
        });
    }

    /**
     * Toggle the task "done" status in the model and view
     */
    toggleTaskStatus() {
        this.task.done = ! this.task.done;
        this.taskView.toggleTaskStatus(this.task);
    }

}