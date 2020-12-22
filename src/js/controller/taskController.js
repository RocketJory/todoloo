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

        // register event listeners
        this.taskView.checkbox.addEventListener("click", () => {
            this.toggleTaskStatus();
        });
        if (this.taskView.taskDescriptionElem) {
            this.taskView.taskDescriptionElem.addEventListener("click", () => {
                alert("asdaf");
            });
        }
        if (this.taskView.taskPriority) {
            this.taskView.taskPriority.addEventListener("click", () => {
                
            });
        }
    }

    /**
     * Toggle the task "done" status in the model and view
     */
    toggleTaskStatus() {
        this.task.done = ! this.task.done;
        this.taskView.toggleTaskStatus(this.task);
    }

}