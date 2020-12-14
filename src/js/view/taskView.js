import {TaskModel} from "./../model/taskModel.js";

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

        const taskLabel = document.createElement("label");
        taskLabel.classList = "custom-control-label";
        taskLabel.innerHTML = this.task.title;
        taskLabel.setAttribute("for", "task" + this.task.key);

        taskBox.append(checkBox, taskLabel);

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

        this.taskElem.querySelector("label").innerHTML = (taskModel.done) ? title.strike() : title;
    }



}