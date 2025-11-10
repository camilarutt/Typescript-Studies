/* #########################################################
       This is the file for the lessons about OBJECTS 
  and their possible parameters and return annotations types 
##########################################################*/

const exampleObject = {};

// function with an object type parameter
function printName(person: { firstName: string; lastName: string }): void {
  console.log(`${person.firstName} ${person.lastName}`);
}

printName({ firstName: "Maria", lastName: "Silva" }); // "Maria Silva"

//  Example with a variable with annotated object types

let coordinates: { x: number; y: number } = { x: 34, y: 2 };

// Return object type annotation on a function

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

/* if the variable is an object that exists that includes the properties that we > need < at
  the function, even if it has > more < properties than determinated, the typescript accepts 
  the checking if the properties needed are checked, so if you do an inline function call
  with object literal, typescript will complain */
