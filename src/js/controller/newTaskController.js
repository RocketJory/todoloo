import {NewTaskView} from "../view/newTaskView.js";

export class NewTaskController {

    /**
     * initialize the new task controller. Register events
     * @param {NewTaskView} newTaskView 
     */
    constructor(newTaskView) {
        this.newTaskView = newTaskView;

        console.log(this.newTaskView.newBtn);

        this.newTaskView.newBtn.addEventListener("click", (e) => {
            this.newTaskView.toggleNewTask();
        });
        this.newTaskView.cancelBtn.addEventListener("click", (e) => {
            this.newTaskView.toggleNewTask();
        });

    }

}