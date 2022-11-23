import { toggleOffcanvas } from "./toggle-offcanvas.js";
import { checkHour } from "./check-hour.js";
import { getDateInfo } from "./clock.js";
import { themeToggle } from './theme-toggle.js';

toggleOffcanvas()
checkHour()
getDateInfo()
themeToggle();

const todoList = document.getElementById("TodoList");
const todoCount= document.getElementById("TodoCount");

function countTodo(){
    const item = document.querySelectorAll(".list__item");
    console.log(item);
    todoCount.textContent = item.length + " items left";
}

function createTodoItem(task) {
    
   
    const todoItem = document.createElement("li");
    
    todoItem.classList.add("list__item");

   
    const itemCircle = document.createElement("span");
    itemCircle.classList.add("item__circle")
    
    todoItem.appendChild(itemCircle);

    const itemText = document.createElement("p");
    itemText.classList.add("item__text");
    itemText.textContent = task;
    
    todoItem.appendChild(itemText);

   
    todoList.appendChild(todoItem);
   
    countTodo();
}

const tasks = [
    "Zrobić zakupy",
    "Posprzątać",
    "Zrobić pranie",
    "Odkurzyć",
    "Umyć podłogi",

];
tasks.forEach(function(task){
    createTodoItem(task);
});

const addTodoField = document.getElementById("AddTodo");

function addTodo() {
    const msg = addTodoField.value;

    if (msg.trim().length >= 5) {
        createTodoItem(msg)
        addTodoField.value = "";
    } else {
        console.log("Nazwa jest za krótka")
    }
}
addTodoField.addEventListener("change", addTodo);




function checkCompleted(){
    todoList.addEventListener("click", function (e) {
        if(e.target.tagName ==="SPAN"){
            e.target.parentNode.classList.toggle("list__item--is-active");
        }else{
            return;
        }

}); 
}
checkCompleted();
    const clearBtn = document.getElementById("TodoClear");

 function deleteCompleted() {

    const items = document.querySelectorAll(".list__item");

    items.forEach(function (item){
        if (item.classList.contains("list__item--is-active")) {
            todoList.removeChild(item);
        }
    });
    countTodo();
 }
 clearBtn.addEventListener("click", deleteCompleted);




