"use strict";
/*
console.log("hey!!!!");

const btn = document.getElementById("btn")!; // returns HTML element or null
console.log(btn);

btn?.addEventListener("click", function () {
  alert("clicked");
});
"?" is an optional if the element exists on js
if btn id doens't exist, it will give null

 ! is null assertion operator, you won't need the ?, but it the ids NEEDS to exist

## TYPE ASSERTIONS

let mystery: unknown = "Hello World!";

const numChars = (mystery as string).length;

-> that doesnt change the type of mystery, it is still unknwon, but it won't complain if we call a method that needs a specific type
*/
const input = document.getElementById("todoinput");
const btn = document.getElementById("btn");
const form = document.querySelector("form"); // as query selector it already detected the HTMLFormElement
const list = document.getElementById("todolist");
const todos = readTodos(); // it envolves the possibility of the null value
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    console.log("SUBMITTED");
}
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}
form.addEventListener("submit", handleSubmit);
