// function parameters annotations
function sendHi(name: string) {
  return `Hi, ${name}`;
}

sendHi("Joanne");

function square(num: number) {
  return num * num;
}

square(6);

// example in an arrow function
const basicInfo = (age: number, name: string, isChild: boolean) => {
  return `Name: ${name}, Age: ${age}, Is Child: ${isChild}`;
};

basicInfo(25, "Alice", false);
// basicInfo("25", "Alice", false); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// FUNCTION WITH FIXED VALUE PARAMETER
function sendHiFixed(person: string = "Friend") {
  return `Hi there, ${person}`;
}

sendHiFixed(); // "Hi there, Friend"
sendHiFixed("Joanne"); // "Hi there, Joanne"

// arrow function with return type annotation prefixed
const multiply = (x: number, y: number): number => {
  return x * y;
};

// ANONYMOUS FUNCTIONS
const colors = ["red", "green", "blue"];

colors.map((color) => {
  // we don't need to say that color is a string
  return color.toUpperCase(); // it complains with some anon functions such as toFixed that needs a number type
});

// VOID, returning nothing
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  // return "" -> Error: Type 'string' is not assignable to type 'void'
}

// NEVER, function that never finishes running, or a function that throws an exception
function makeError(msg: string) {
  // infered type is void
  throw new Error(msg);
}

function makeErrorTwice(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Game loop running!");
  }
}

/* GENERAL COMMENTS

  if no type is specified, the default will be "any"
  typescript can infer the return type, even if it returns different types. typescript will understand as an union type
  a function with no return statement will have a return type of "void"

*/
