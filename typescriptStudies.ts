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

// if no type is specified, the default will be "any"

// function with fixed value parameters
function sendHiFixed(person: string = "Friend") {
  return `Hi there, ${person}`;
}

sendHiFixed(); // "Hi there, Friend"
sendHiFixed("Joanne"); // "Hi there, Joanne"
