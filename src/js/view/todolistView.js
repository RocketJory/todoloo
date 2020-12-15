import {TodoList} from "../model/todolistModel.js";
import {TaskView} from "../view/taskView.js";
import {TaskController} from "../controller/taskController.js";

/**
 * Todo List View class, defining methods to render the todolist to the DOM
 */
export class TodoListView {

    /**
     * Set the view DOM element to attach to
     * @param {HTMLElement} elem 
     */
    constructor(elem) {
        this.elem = elem;
    }

    /**
     * Render the todolist to the DOM
     * @param {TodoList} todoListModel 
     */
    render(todoListModel) {
        this.elem.textContent = '';

        const todoListElem = document.createElement("ul");
        todoListElem.classList = "list-group list-group";

        todoListModel.tasks.forEach((task) => {
            const taskView = new TaskView(todoListElem, task);
            const taskController = new TaskController(task, taskView);

            taskController.render();
        });

        this.elem.appendChild(todoListElem);
    }

}