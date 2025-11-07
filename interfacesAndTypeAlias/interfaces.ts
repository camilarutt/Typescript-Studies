/* #########################################################
      This is the file for the lessons about INTERFACES,
     their basic syntax, their usage, pros and cons, and
     specially the difference of type alias and interface
########################################################### */

// interface is just as a type alias
type Point = {
  x: number;
  y: number;
};

/* interfaces allow us to describe the shape of objects, but ONLY objects
 interface also can't use union type */

interface Human {
  name: string;
  age: number;
}

// Example of an interface with method, readonly and optional attributes
interface Person {
  readonly id: number;
  name: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
}

/* const roberto: Person = {
  name: "Roberto Silva"
  id: 3,
  sayHi: () => {
    return "Hello!"; // expecting 0 arguments
  },
}; 

roberto.name = "José"; // valid
roberto.id = 39585 -> it complains, readonly limitations 

THIS PIECE ABOVE is commented because the interface Person
will be reopenned to have properties added */

interface Product {
  name: string;
  price: number;
  applyDiscount(anyName: number): number;
}

const hav: Product = {
  name: "Havaianas",
  price: 100000,
  applyDiscount(amount: number) {
    // amount can be any name, matching or not
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(hav.applyDiscount(0.4));

/* you can add more properties on interfaces from another files, or the same files, 
extending on it and being required (not the optional ones with ? of course) */

interface Person {
  favFood?: string;
  hey(): string;
}

const camila: Person = {
  name: "Camila",
  age: 28,
  favFood: "Hamburger",
  hey() {
    return "Opa!";
  },
  sayHi() {
    return "Oi!";
  },
  id: 3,
  job: "Hostess",
};

// extend interface within another
interface Person extends Human {
  job: "Waitress" | "Web Developer" | "Hostess";
}

const newCamila: Person = {
  name: "Camila",
  age: 35,
  favFood: "Salada",
  id: 3,
  hey() {
    return "Como vai?";
  },
  sayHi() {
    return "Olá!";
  },
  job: "Web Developer",
};

// we can expand multiple interfaces, not only a single inheritance
interface Candidate {
  name: string;
}

interface Employee {
  email: string;
}

interface Engineer extends Candidate, Employee {
  level: string;
  languages: string[];
}

const lavoir: Engineer = {
  name: "Lavoir",
  email: "lavoir@gmail.com",
  level: "junior",
  languages: ["JS", "Python"],
};

/* WHAT DIFFERS TYPE ALIASES vs INTERFACES

  Interface can ONLY describe a shape of an OBJECT, 
  so you can't describe a literal type such as string, 
  or union type between two literals

  Interfaces can be "reopened" to add attributes, while type alias can't
  "extends" syntax can only be used on interface, on type alias you need to use &
   
  example:
  type TypeAlias = OtherAlias & {
  attribute
  } */
