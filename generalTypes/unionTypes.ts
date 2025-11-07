/* #########################################################
      This is the file for the lessons about UNION TYPES,
     their basic syntax, the usage on functions and arrays
########################################################### */

let code: number | string = 0;
code = 2157;
code = "2157";

// using pipe character "|" to create an OR logic

type unionCoords = {
  x: number;
  y: number;
};

type unionLoc = {
  lat: number;
  long: number;
};

let coordinatesNew: unionCoords | unionLoc = { x: 1, y: 34 }; // setting two different type aliases on a variable
coordinatesNew = { lat: 54.544, long: 54.5454 }; // it also accepts the other type alias

// Example with a function with two different types on an union type
function printCode(code: number | string): void {
  console.log(`The code is ${code}`);
}

printCode(8474); // valid
printCode("r0Bs0n"); // valid

/* function calculateUsage( kws: number | string, price: number);{
  return price * kws;
} - >it will complain if it uses a method that needs EXCLUSIVELY a type, 
 such as multiplication on a string or toUpperCase on a number */

// Example of type narrowing with union types
function calculateUsage(kws: number | string, price: number) {
  if (typeof kws === "string") {
    // using typeof checking
    kws = parseFloat(kws.replace(".", ","));
  }
  return price * kws;
}

// Union types and arrays
const nums: number[] = [1, 2, 3, 4];
const stuff: any[] = [1, 2, 3, 4, true, "dsgi", {}]; // AVOID THIS

const stuffNew: (number | string)[] = []; // accepts array of ONLY number or ONLY strings or BOTH
const stuffNewer: number[] | string[] = [1, 2, 3, 4]; // it can't mix the types, careful with syntax difference

const coords: (unionCoords | unionLoc)[] = [];

coords.push({ lat: 544.544, long: 5454.5454 });
coords.push({ x: 213, y: 43 });

// Literal types example
const zero: 0 = 0; // it's a literal type 0, not any number, but THE number 0

// Literal types with union
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "Excited" -> invalid

type Weekend = "Saturday" | "Sunday" | 0;

let today: Weekend = "Saturday";
// today = "wednesday" -> invalid, expects saturday or sunday
