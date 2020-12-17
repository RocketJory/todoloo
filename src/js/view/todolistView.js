import {TodoList} from "../model/todolistModel.js";
import {TaskView} from "../view/taskView.js";
import {TaskController} from "../controller/taskController.js";

/**
 * Todo List View class, defining methods to render the todolist to the DOM
 * @property {Array.<TaskView>} taskViews - 
 */
export class TodoListView {

    /**
     * Set the view DOM element to attach to
     * @param {HTMLElement} elem 
     */
    constructor(elem) {
        this.elem = elem;

        this.createUL();
    }

    createUL() {
        const todoListElem = document.createElement("ul");
        todoListElem.classList = "list-group";
        this.todoListElem = todoListElem;
        this.elem.appendChild(todoListElem);
    }

    /**
     * Render the todolist to the DOM
     */
    render(taskControllers) {
        this.todoListElem.textContent = '';

        taskControllers.forEach(tController => {
            tController.render();
        });
    }

}