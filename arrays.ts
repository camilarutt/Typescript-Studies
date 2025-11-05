// const activeUsers: [] = []; ->  will complain if it's done anything to the array per se
// always empty array error "[]", 0 elements

const activeUsers: string[] = [""]; // it can start with anything, even empty but will only accept strings

// if you don't annotate any type to the array, it will identify as any type

activeUsers.push("Camila");
// activeUsers.push(234) Argument of type 'number' is not assignable to parameter of type 'string'.

const ageList: number[] = [45, 56, 12];
ageList[0] = 99;
// agelist[0] = "Robson" -> invalid

// ALTERNATIVE SYNTAX
let phrases: Array<string> = [];
const bools: Array<Boolean> = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });
// coords.push({ y: 8 }); -> invalid, you are missing X

// MULTIDIMENSIONAL ARRAYS
const board: string[][] = [
  ["X", "O", "A"],
  ["X", "O", "A"],
  ["X", "O", "A"],
]; // -> two levels

const demo: number[][][] = [[[1]]]; // -> third level
