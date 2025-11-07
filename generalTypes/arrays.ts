/* #########################################################
    This is the file for the initial lessons about ARRAYS 
   and their possible syntaxes to determinate array types
          It also covers multidimensional arrays
##########################################################*/

const activeUsers: string[] = [""]; // it can start with anything, even empty but will only accept strings
/* const activeUsers: [] = []; ->  will complain if it's done anything to the array per se
  it will always send an empty array error "[]", expecting 0 elements
  if you don't annotate any type to the array, it will identify as any type */

activeUsers.push("Camila");
// activeUsers.push(234) Argument of type 'number' is not assignable to parameter of type 'string'.

const ageList: number[] = [45, 56, 12];
ageList[0] = 99; // it can be modified
// agelist[0] = "Robson" -> invalid, since expects number

// ALTERNATIVE SYNTAX
let phrases: Array<string> = [];
const bools: Array<Boolean> = [];

type coordinateType = {
  x: number;
  y: number;
};

const coords: coordinateType[] = [];
coords.push({ x: 23, y: 8 });
// coords.push({ y: 8 }); -> invalid, you are missing X, expecting 2 parameters, not one

// MULTIDIMENSIONAL ARRAYS, an array within an array
const board: string[][] = [
  ["X", "O", "A"],
  ["X", "O", "A"],
  ["X", "O", "A"],
]; // -> two levels

const demo: number[][][] = [[[1]]]; // -> third level
