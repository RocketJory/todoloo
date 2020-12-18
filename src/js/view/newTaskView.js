import flatpickr from "flatpickr";

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

        this.taskPriorityBtns = this.elem.querySelector("#task-priority");

        this.dueDate = this.elem.querySelector("#task-due-date");
        this.initDueDatePicker();

        this.taskDetailsBtn = this.elem.querySelector("#task-details-btn");
        this.taskDetails = this.elem.querySelector("#task-details");
        this._showDetails = true;
        this.toggleTaskDetails();

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

    toggleTaskDetails() {
        this._showDetails = ! this._showDetails;
        if (this._showDetails) {
            this.taskDetails.style.display = 'block';
        } else {
            this.taskDetails.style.display = 'none';
        }
    }

    /**
     * initialize the flatpickr instance for datetime picking
     */
    initDueDatePicker() {
        const fp = flatpickr(this.dueDate, {
            enableTime: true,
            minDate: "today",
            altInput: true,
            altFormat: "M j, Y H:i",
            dateFormat: "Y-m-d H:i",
        });
    }

}