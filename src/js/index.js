import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../css/index.scss";

// import {TaskModel} from "./model/taskModel.js";

import { TodoListModel } from "./model/todolistModel.js";
import { TodoListView } from "./view/todolistView.js";
import { TodoListController } from "./controller/todolistController.js";

import { NewTaskView } from "./view/newTaskView.js";
import { NewTaskController } from "./controller/newTaskController.js";

let list = new TodoListModel();

// let a = new TaskModel({title: "task1"});
// let b = new TaskModel({title: "task2"});
// let c = new TaskModel({title: "task3"});
// list.extend([a,b,c]);

const contentElem = document.getElementById("todolist");

const tdView = new TodoListView(contentElem);
const tdController = new TodoListController(tdView, list);

tdController.render();

const newTaskDiv = document.getElementById("add-task");
const newView = new NewTaskView(newTaskDiv);

const newController = new NewTaskController(newView, tdController);
console.log(newController);

document.querySelector("#title").addEventListener("click", () => {
  list.log();
});
