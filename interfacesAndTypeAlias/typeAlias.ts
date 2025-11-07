export {};

/* #########################################################
      This is the file for the lessons about TYPE ALIAS,
  the basic syntax, the possible of integration and limitations
########################################################### */

type SingleCoord = {
  x: number;
  y: number;
};

let coord: SingleCoord = { x: 34, y: 2 }; // inserting values on a variable

function doublePoint(point: SingleCoord): { x: number; y: number } {
  return { x: point.x * 2, y: point.y * 2 };
} // using the type as a parameter in a function. This function expects an object as return value

type MyNum = number;
let age: MyNum = 84; // valid

// Example of a function with a object type parameter, including nested object
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculateEarnings(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}
const mySong: Song = {
  title: "Brasil",
  artist: "Robson",
  numStreams: 251584,
  credits: { producer: "Hudson", writer: "Maria" },
};

calculateEarnings(mySong);
printSong(mySong); // Brasil - Robson

type NewCoord = {
  x: number;
  y: number;
  z?: number; // optional type
};

const myPoint: NewCoord = { x: 1, y: 3 }; // it accepts to not having y

type User = {
  readonly id: number; // readonly key word - it can't be modified since inputted
  username: string;
};

const user: User = {
  id: 12558,
  username: "robsona",
};

console.log(user.id); // valid "122558"
// invalid: user.id = 238974 -> can't be changed/modified, only accessed

// Intersection with Type Aliases
type Square = {
  height: number;
};

type Color = {
  color: string;
};

type ColorfulSquare = Square & Color;

const happyFace: ColorfulSquare = {
  height: 4,
  color: "yellow",
};

type Pig = {
  pigglets: number;
};

type Chicken = {
  breed: string;
};

type Farm = Pig &
  Chicken & {
    age: number;
  };

const granja: Farm = {
  pigglets: 7,
  breed: "Galinha Preta",
  age: 9,
};
