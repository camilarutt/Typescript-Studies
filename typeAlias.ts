export {};

/* type Coordinate = {
  x: number;
  y: number;
};

let coordinate: Coordinate = { x: 34, y: 2 };

function doublePoint(point: Coordinate): { x: number; y: number } {
  return { x: point.x * 2, y: point.y * 2 };
}

type MyNum = number; // can also be doable

let age: MyNum = 84; */

// function with nested object type parameter

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

type Coordinate = {
  x: number;
  y: number;
  z?: number; // optional type
};

const myPoint: Coordinate = { x: 1, y: 3 }; // it accepts to not having y

// readonly key word - modifier

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12558,
  username: "robsona",
};

console.log(user.id); // valid
// invalid: user.id = 238974 -> can't be changed/modified, only accessed

// intersection types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const belinha: CatDog = {
  numLives: 7,
  breed: "Unknown",
  age: 9,
};
