/* #########################################################
      This is the file for the lessons about ENUMS,
  the usages and cons of their usage and community reputation
########################################################### */

/* Unless specified otherwise, enums default value starts at 0.

Enums exists on other languages and on typescript, but they don't exist on javascript
Example of common usage: arrow key directions, status checking

Enums are like a set of named constants */

enum PackageStatus {
  PENDING, // 0
  SHIPPED, // 1
  DELIVERED, // 2
  RETURNED, // 3
}

const orderActualStatus = PackageStatus.SHIPPED;

function hasShipped(status: PackageStatus) {
  return status === PackageStatus.SHIPPED;
}

hasShipped(PackageStatus.RETURNED);

// You can assign a single value and it'll then change the other ones which don't have any value
enum Moves {
  UP = 10,
  DOWN = 34,
  LEFT = 36,
  RIGHT, // 37
}

// Elements need to have assigned values if at least one has an fixed value other than string
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

// You can have enums with more than one type
enum ArrowKeysMoves {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  UPRIGHT = 385,
}

/* On the compilled javascript basically it's creating the object OrderStatus, per se, so
it's a new code that's generated of typescript onto Javascript, such as a function with multiple lines
Because of that, the community decided that typescript will stay closer to javascript and avoid new 
syntax and new code generation on the development of typescript language

If you use "const enum (...)", you avoid the new code and generated objects on javascript, 
but also can read and access from typescript, with useful comments

People tend to prefer using objects than enums, but enums have the autocomplete feature */
