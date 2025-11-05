let age: number | string = 23;
age = 21;
age = "24";

// using pipe character "|" to create an OR logic

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinatesNew: Point | Loc = { x: 1, y: 34 };
coordinatesNew = { lat: 544.544, long: 5454.5454 };

// functions with two different types to unite

function printCode(code: number | string): void {
  console.log(`The code is ${code}`);
}

printCode(8474);
printCode("r0Bs0n");

/* function calculateUsage( kws: number | string, price: number);{
  return price * kws;
} 
 
^^^ it will complain if it uses a method that uses exclusively a type, such as multiplication on a string or number union annotation type */

// EXAMPLE OF TYPE NARROWING WITH UNION TYPES

// using typeof checking
function calculateUsage(kws: number | string, price: number) {
  if (typeof kws === "string") {
    kws = parseFloat(kws.replace(".", ","));
  }
  return price * kws;
}

// UNION TYPES AND ARRAYS

const nums: number[] = [1, 2, 3, 4];
const stuff: any[] = [1, 2, 3, 4, true, "dsgi", {}]; // AVOID THIS

const stuffNew: (number | string)[] = []; // accepts array of only number or only strings or both
const stuffNewer: number[] | string[] = [1, 2, 3, 4]; // it can't mix the types

const coords: (Point | Loc)[] = [];
coords.push({ lat: 544.544, long: 5454.5454 });
coords.push({ x: 213, y: 43 });

// LITERAL TYPES

const zero: 0 = 0; // it's a literal type 0, not any number, but THE number 0

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type Weekend = "Saturday" | "Sunday" | 0;

let today: Weekend = "Saturday";
// today = "wednesday" -> invalid
