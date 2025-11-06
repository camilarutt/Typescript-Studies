// interface is just as a type alias

type Point = {
  x: number;
  y: number;
};

// interfaces allow us to describe the shape of objects, but only objects
interface Person {
  name: string;
  age: number;
}

// interface can't use union type (?)

// INTERFACE WITH METHOD, READONLY AND OPTIONAL ATTRIBUTES
interface newPerson {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
}

const roberto: newPerson = {
  first: "Roberto",
  last: "Robson",
  id: 3,
  sayHi: () => {
    return "Hello!"; // expecting 0 arguments
  },
};

roberto.first = "ihaaa"; // valid
//roberto.id = 39585 -> it complains, readonly limitations

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

// you can add more properties on interfaces from another files, or the same files, extending on it and being required (not the optional ones with ? of course)
interface Person {
  favFood?: string;
  hey(): string;
}

const camila: Person = {
  name: "Camila",
  age: 28,
  favFood: "Hamburger",
  hey() {
    return "Oieee!";
  },
};

// extend interface within another
interface People extends Person {
  job: "Waitress" | "Web Developer" | "Hostess";
}

const superCamila: People = {
  name: "Camila",
  age: 28,
  favFood: "Salada",
  hey() {
    return "Como vai?";
  },
  job: "Web Developer",
};

// we can expand multiple interfaces, not only a single inheritance

interface Human {
  name: string;
}

interface Employee {
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const lavoir: Engineer = {
  name: "Lavoir",
  email: "lavoir@gmail.com",
  level: "junior",
  languages: ["JS", "Python"],
};

// what differs type alias vs interfaces

// interface can only describe a shape of an object, but you can't describe a literal type such as string, or union type between two literals

// but interfaces can be "reopened" to add attributes, but type alias can't

// extending syntax can only be used on interface, on type alias you need to:

// type TypeAlias = OtherAlias & {
// attribute
// }
