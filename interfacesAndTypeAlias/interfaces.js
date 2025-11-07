/* #########################################################
      This is the file for the lessons about INTERFACES,
     their basic syntax, their usage, pros and cons, and
     specially the difference of type alias and interface
########################################################### */
var hav = {
    name: "Havaianas",
    price: 100000,
    applyDiscount: function (amount) {
        // amount can be any name, matching or not
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(hav.applyDiscount(0.4));
var camila = {
    name: "Camila",
    age: 28,
    favFood: "Hamburger",
    hey: function () {
        return "Opa!";
    },
    sayHi: function () {
        return "Oi!";
    },
    id: 3,
    job: "Hostess",
};
var newCamila = {
    name: "Camila",
    age: 35,
    favFood: "Salada",
    id: 3,
    hey: function () {
        return "Como vai?";
    },
    sayHi: function () {
        return "Olá!";
    },
    job: "Web Developer",
};
var lavoir = {
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
