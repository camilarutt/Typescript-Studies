/* #########################################################
    This is the file for the initial lessons about FUNCTIONS 
  and their possible parameters and return annotations types 
      It also covers Void type and anonymous functions
##########################################################*/

// ### A function with one parameter annotation, string type ###
function sendHi(name: string) {
  return `Hi, ${name}`;
}

sendHi("Joanne"); // "Hi, Joanne"
// sendHi(true); -> Invalid, expects string value, not boolean

// ### A function with one parameter annotation, number type ###
function sum(num: number) {
  return num + num;
}

sum(6); // 6
// sum("a"); Invalid, expects number value, not string
// sum(); -> Invalid, expects 1 parameter

// Example in an arrow function
const humanInfo = (age: number, name: string, isChild: boolean) => {
  return `Name: ${name}, Age: ${age}, Is Child: ${isChild}`;
};

humanInfo(25, "Maria", false); // "Name: Maria, Age: 25, Is Child: false"
// basicInfo("25", "Maria", false); -> Error: Argument of type 'string' is not assignable to parameter of type 'number'

// A function with a fixed value parameter
function sendHiFixed(person: string = "Friend") {
  return `Hi there, ${person}`;
}

sendHiFixed(); // "Hi there, Friend"
sendHiFixed("Joanne"); // "Hi there, Joanne"

/* It can receive either 0 or 1 parameter, since if you leave it blank, 
the function will automatically assume the pre- fixed value */

// An arrow function with return type annotation prefixed
const divide = (x: number, y: number): number => {
  return x / y;
};

// ANONYMOUS FUNCTIONS
const colors = ["purple", "green", "orange"];

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

function exampleLoop(): never {
  while (true) {
    console.log("Loop running!");
  }
}

/* GENERAL COMMENTS

  if no parameter type is specified, the default type will be assume as "any"
  typescript can infer the return type, even if it returns different types. typescript will understand as an union type
  a function with no return statement will have a return type of "void"

*/
