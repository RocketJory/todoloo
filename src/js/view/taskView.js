import {TaskModel} from "./../model/taskModel.js";
import {priority} from "./../priority.js";
import '@fortawesome/fontawesome-free/js/solid';

/** View for task object, controls DOM */
export class TaskView {

    /**
     * Set the view DOM element to attach to
     * @param {HTMLElement} elem 
     * @param {TaskModel} task
     */
    constructor(parentElem, task) {
        this.parentElem = parentElem;
        this.task = task;

        this.taskElem = null;
        this.checkbox = null;
    }

    /**
     * Render the task and attach to parent element node
     */
    render() {

        const taskElem = document.createElement("li");
        taskElem.classList = "list-group-item";

        const taskBox = document.createElement("div");
        taskBox.classList = "task-box custom-control custom-checkbox";

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "task" + this.task.key;
        checkBox.classList = "custom-control-input";
        taskBox.append(checkBox);

        const taskLabel = document.createElement("label");
        taskLabel.classList = "custom-control-label";
        taskLabel.setAttribute("for", "task" + this.task.key);

        if (priority.includes(this.task.priority)) {
            const taskPriority = document.createElement("span");
            taskPriority.classList = "task-priority ";
            taskPriority.innerHTML = '<i class="fas fa-flag"></i> ';
            taskPriority.classList += "priority-"+this.task.priority;
            taskLabel.append(taskPriority);
        }

        const taskTitle = document.createElement("span");
        taskTitle.id = "task-title";
        taskTitle.innerHTML = this.task.title;

        taskLabel.append(taskTitle);
        taskBox.append(taskLabel);

        taskElem.appendChild(taskBox);

        this.taskElem = taskElem;
        this.checkbox = checkBox;

        this.parentElem.append(taskElem);

        // <div class="custom-control custom-checkbox">
        //     <input type="checkbox" class="custom-control-input" id="task1">
        //     <label class="custom-control-label" for="task1">task.title</label>
        // </div>
    }

    /**
     * toggle the task status by strikeing out the label
     * @param {TaskModel} taskModel 
     */
    toggleTaskStatus(taskModel) {
        const title = new String(taskModel.title);

        this.taskElem.querySelector("#task-title").innerHTML = (taskModel.done) ? title.strike() : title;
    }



}