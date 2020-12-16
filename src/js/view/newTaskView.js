
/**
 * Handles display of the new task box 
 */
export class NewTaskView {

    /**
     * initialize DOM elements for the new task form
     * @param {HTMLElement} elem 
     */
    constructor(elem) {
        this.elem = elem;

        this._showTaskBox = false;

        this.newBtn = this.elem.querySelector("#new-task-btn");

        this.newTaskBtnGroup = this.elem.querySelector("#new-task-btn-group");
        this.addBtn = this.elem.querySelector("#add-task-btn");
        this.cancelBtn = this.elem.querySelector("#cancel-task-btn");

        this.newTaskForm = this.elem.querySelector("#new-task-form");

        this.renderNewTaskForm();
        this.renderNewTaskBtn();
    }

    toggleNewTask() {
        this._showTaskBox = ! this._showTaskBox;
        this.renderNewTaskForm();
        this.renderNewTaskBtn();
    }

    renderNewTaskForm() {
        this.newTaskForm.hidden = ! this._showTaskBox;
    }

    renderNewTaskBtn() {
        if (this._showTaskBox) {
            this.newBtn.style.display = 'none';
            this.newTaskBtnGroup.style.display = 'inline-flex';
        } else {
            this.newBtn.style.display = 'block';
            this.newTaskBtnGroup.style.display = 'none';
        }
    }



}