// interface is just as a type alias
var roberto = {
  first: "Roberto",
  last: "Robson",
  id: 3,
  sayHi: function () {
    return "Hello!"; // expecting 0 arguments
  },
};
roberto.first = "ihaaa"; // valid
var shoes = {
  name: "Havaianas",
  price: 100000,
  applyDiscount: function (amount) {
    // amount can be any name, matching or not
    var newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};
console.log(shoes.applyDiscount(0.4));
