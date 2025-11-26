console.log("hey!!!!");

const btn = document.getElementById("btn")!; // returns HTML element or null
console.log(btn);

btn?.addEventListener("click", function () {
  alert("clicked");
});
// "?" is an optional if the element exists on js
// if btn id doens't exist, it will give null

// ! is null assertion operator, you won't need the ?, but it the ids NEEDS to exist
