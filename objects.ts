const exampleObject = {};

// function with an object type parameter
function printName(person: { firstName: string; lastName: string }): void {
  console.log(`${person.firstName} ${person.lastName}`);
}

printName({ firstName: "Maria", lastName: "Silva" });

// annotate variables

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// type of the return being oject type parameters

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// if the variable is an object that exists that has the properties that we need at the function
// even if it has more properties, the typescript accepts checking if the properties needed are checked
// so if you do an inline function call with object literal, typescript will complain
