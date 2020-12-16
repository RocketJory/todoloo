import {NewTaskView} from "../view/newTaskView.js";
import {TodoListController} from "./../controller/todolistController.js";
import {TaskModel} from "../model/taskModel.js";
import {TaskView } from "../view/taskView.js";
import {TaskController} from "./../controller/taskController.js";

export class NewTaskController {

    /**
     * initialize the new task controller. Register events
     * @param {NewTaskView} newTaskView 
     * @param {TodoListController} todolistController
     */
    constructor(newTaskView, todolistController) {
        this.newTaskView = newTaskView;
        this.todolistController = todolistController;

        // new and cancel buttons toggle the new task form 
        this.newTaskView.newBtn.addEventListener("click", (e) => {
            this.newTaskView.toggleNewTask();
        });
        this.newTaskView.cancelBtn.addEventListener("click", (e) => {
            this.newTaskView.toggleNewTask();
        });

        // submitting a new task
        this.newTaskView.addBtn.addEventListener("click", e => this.addTask(e));
        this.newTaskView.newTaskForm.addEventListener('submit', e => this.addTask(e));

        // show task details
        this.newTaskView.taskDetailsBtn.addEventListener("click", e => this.newTaskView.toggleTaskDetails());
    }

    /**
     * Get data from new task form, create new task and push to todo list
     * @param {Event} e 
     */
    addTask(e) {
        const formData = new FormData(this.newTaskView.newTaskForm);
        const taskTitle = formData.get("title");
        
        // create task
        const task = new TaskModel({title: taskTitle});

        // add details if needed
        if (this.newTaskView._showDetails) {
            const taskPriority = formData.get("priority");
            const taskDescription = formData.get("description");
            const taskDueDate = formData.get("due-date");
            if (taskPriority) {
                task.priority = taskPriority;
            }
            if (taskDescription) {
                task.description = taskDescription;
            }
            if (taskDueDate) {
                task.dueDate = taskDueDate;
            }
        }

        const taskView = new TaskView(this.todolistController.todoListView.elem, task);
        const taskController = new TaskController(task, taskView);
        
        this.todolistController.pushTask(task);

        e.preventDefault();
    }

}