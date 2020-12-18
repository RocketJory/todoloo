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
        this.deleteBtnElem = null;
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
            taskLabel.append(this.priorityElem());
        }

        taskLabel.append(this.taskTitle());
        taskLabel.append(this.deleteBtn());

        taskBox.append(taskLabel);

        if (this.task.dueDate != null) {
            taskBox.append(this.dueDate());
        }

        if (this.task.description != null) {
            taskBox.append(this.taskDescription());
        }
        
        taskElem.appendChild(taskBox);

        this.taskElem = taskElem;
        this.checkbox = checkBox;

        this.parentElem.append(taskElem);

    }

    /**
     * toggle the task status by strikeing out the label
     * @param {TaskModel} taskModel 
     */
    toggleTaskStatus(taskModel) {
        const title = new String(taskModel.title);
        this.taskElem.querySelector("#task-title").innerHTML = (taskModel.done) ? title.strike() : title;
    }

    /**
     * create the task priority element, save as field, return elem
     */
    priorityElem() {
        const taskPriority = document.createElement("span");
        taskPriority.classList = "task-priority ";
        taskPriority.classList += "priority-"+this.task.priority;
        taskPriority.innerHTML = '<i class="fas fa-flag"></i>&nbsp;';
        this.taskPriority = taskPriority;
        return taskPriority;
    }

    /**
     * create the task title element, save as field, return elem
     */
    taskTitle() {
        const taskTitle = document.createElement("span");
        taskTitle.id = "task-title";
        taskTitle.innerHTML = this.task.title;
        return taskTitle;
    }

    /**
     * create the delete button element, save as field, return elem
     */
    deleteBtn() {
        const deleteBtnElem = document.createElement("div");
        deleteBtnElem.classList = "task-delete";
        deleteBtnElem.innerHTML = '<div class=""><i class="fas fa-trash"></i></div>';
        this.deleteBtnElem = deleteBtnElem;
        return deleteBtnElem;
    }

    /**
     * create the due date element, save as field, return elem
     */
    dueDate() {
        const taskDueDate = document.createElement("div");
        taskDueDate.classList = "task-due-date";
        taskDueDate.innerHTML = '<i class="far fa-clock"></i>&nbsp;'
        taskDueDate.innerHTML += this.task.dueDate;
        this.taskDueDateElem = taskDueDate;
        return taskDueDate;
    }

    /**
     * create the task description element, save as field, return elem
     */
    taskDescription() {
        const taskDescription = document.createElement("div");
        taskDescription.classList = "task-description";
        taskDescription.innerHTML = '<i class="fas fa-clipboard"></i>&nbsp;' + this.task.description;
        this.taskDescriptionElem = taskDescription;
        return taskDescription;
    }



}