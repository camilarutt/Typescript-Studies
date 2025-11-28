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

// (<HTMLInputElement>input).value; other example of type assertion, don't work with JSX and react etc

/* btn.addEventListener("click", function () {
  alert(input.value);
  input.value = "";
}); */

/*
form.addEventListener("submit", function (e) {
  // it gets the SubmitEvent type, normally works better with anonymous functions, if you do a standalone one, it will need the type annotation, such as in the function below
  e.preventDefault();
  console.log("SUBMIT");
});*/

interface Todo {
  text: string;
  completed: boolean;
}

const input = document.getElementById("todoinput")! as HTMLInputElement;
const btn = document.getElementById("btn")! as HTMLButtonElement;
const form = document.querySelector("form")!; // as query selector it already detected the HTMLFormElement
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos(); // it envolves the possibility of the null value
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();
  input.value = "";
  console.log("SUBMITTED");
}

function createTodo(todo: Todo) {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", function () {
    todo.completed === checkbox.checked;
    saveTodos();
  });

  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
}

form.addEventListener("submit", handleSubmit);
