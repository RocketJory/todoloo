import {TodoListView} from "../view/todolistView.js";
import {TodoListModel} from "../model/todolistModel.js";

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
    }

    renderList() {
        this.todoListView.render(this.todoListModel);
    }

}