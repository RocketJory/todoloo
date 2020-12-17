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
        this.deleteBtn = null;
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
        taskLabel.classList = "custom-control-label task-info";
        taskLabel.setAttribute("for", "task" + this.task.key);

        if (priority.includes(this.task.priority)) {
            const taskPriority = document.createElement("span");
            taskPriority.classList = "task-priority ";
            taskPriority.innerHTML = '<i class="fas fa-flag"></i>&nbsp;';
            taskPriority.classList += "priority-"+this.task.priority;
            taskLabel.append(taskPriority);
        }

        const taskTitle = document.createElement("span");
        taskTitle.id = "task-title";
        taskTitle.innerHTML = this.task.title;
        taskLabel.append(taskTitle);

        const deleteBtn = document.createElement("div");
        deleteBtn.classList = "task-delete";
        deleteBtn.innerHTML = '<div class=""><i class="fas fa-trash"></i></div>';
        taskLabel.append(deleteBtn);

        taskBox.append(taskLabel);

        if (this.task.dueDate != null) {
            const taskDueDate = document.createElement("div");
            taskDueDate.classList = "task-due-date";
            taskDueDate.innerHTML = '<i class="far fa-clock"></i>&nbsp;'
            taskDueDate.innerHTML += this.task.dueDate;
            taskBox.append(taskDueDate);
        }

        if (this.task.description != null) {
            const taskDescription = document.createElement("div");
            taskDescription.classList = "task-description";
            taskDescription.innerHTML = this.task.description;
            taskBox.append(taskDescription);
        }

        if (this.task.date != null) {
            const taskDate = document.createElement("span");
            taskDate.innerHTML = this.task.dueDate;
        }
        
        taskElem.appendChild(taskBox);

        this.taskElem = taskElem;
        this.checkbox = checkBox;
        this.deleteBtn = deleteBtn;

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