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

const input = document.getElementById("tableinput")! as HTMLInputElement;
const btn = document.getElementById("btn")! as HTMLButtonElement;

btn.addEventListener("click", function () {
  alert(input.value);
  input.value = "";
});
