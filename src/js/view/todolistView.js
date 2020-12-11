import {TodoList} from "../model/todolistModel.js";

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
        const todoListElem = document.createElement("ul");
        todoListElem.classList = "list-group list-group";

        todoListModel.tasks.forEach((task) => {
            const taskElem = document.createElement("li");
            taskElem.classList = "list-group-item"
            taskElem.innerHTML = task.title;
            todoListElem.appendChild(taskElem);
        });
        this.elem.appendChild(todoListElem);
    }

}