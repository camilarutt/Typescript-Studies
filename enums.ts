// Unless specified otherwise, enums default to starting at 0, not 1.

// enums exists on other languages and on typescript, but they don't exist on javascript

// usage ex: arrow key directions, statuses

// enums are like a set of named constants

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const orderActualStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// you can assign a single value and it'll then change the other ones that don't have value
enum Moves {
  UP = 10,
  DOWN = 34,
  LEFT = 36,
  RIGHT, // 37
}

//strings need to have assigned values if at least one is a string
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

// you can have enums with more types
enum ArrowKeysMoves {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  UPRIGHT = 385,
}

// on javascript basically it's creating the object orderstatus, it's a new code that's generated of typescript
// the community decided typescript to stay closer to javascript and avoid new syntax and new code generation

// if you use "const enum (...)", you avoid the new code and generated objects on javascript, but also can read and access from typescript, with comments

// people tend to prefer using objects than enums
