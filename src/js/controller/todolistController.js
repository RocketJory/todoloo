import {TodoListView} from "../view/todolistView.js";
import {TodoListModel} from "../model/todolistModel.js";
import {TaskModel} from "../model/taskModel.js";
import {TaskView} from "../view/taskView.js";
import {TaskController} from "../controller/taskController.js";

/**
 * The controller for the todolist app.
 * Registers the model and view and handles any interaction
 */
export class TodoListController {

    /**
     * register the view and model
     * @param {TodoListView} todoListView 
     * @param {TodoListModel} todoListModel 
     */
    constructor(todoListView, todoListModel) {
        this.todoListView = todoListView;
        this.todoListModel = todoListModel;

        this.taskControllers = [];
        this.taskViews = [];
    }

    /**
     * populate task controller and view lists, render all tasks and attach necessary events
     */
    render() {
        this.createViewsControllers();
        this.todoListView.render(this.taskControllers);
        
        this.attachDeleteBtns();
    }

    /**
     * Create fresh task views and controllers, store these in an internal list
     */
    createViewsControllers() {
        this.taskControllers = [];
        this.taskViews = [];

        this.todoListModel.tasks.forEach((task) => {
            const taskView = new TaskView(this.todoListView.todoListElem, task);
            const taskController = new TaskController(task, taskView);
            this.taskControllers.push(taskController);
            this.taskViews.push(taskView);
        });
    }

    /**
     * Attach the delete task functionality to each task view's delete button
     */
    attachDeleteBtns() {
        this.taskViews.forEach( taskView => {
            taskView.deleteBtnElem.addEventListener("click", e => {
                this.deleteTask(taskView.task.key);
            });
        });
    }

    /**
     * add a task to the model and update the view
     * @param {TaskModel} task 
     */
    pushTask(task) {
        this.todoListModel.push(task);
        this.render();
    }

    /**
     * Delete the task identified by the given task key
     * @param {Number} taskKey - the task key
     */
    deleteTask(taskKey) {
        this.todoListModel.remove(taskKey);
        this.render();
    }

}