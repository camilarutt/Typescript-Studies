type Coordinate = {
  x: number;
  y: number;
};

let coordinate: Coordinate = { x: 34, y: 2 };

function doublePoint(point: Coordinate): { x: number; y: number } {
  return { x: point.x * 2, y: point.y * 2 };
}

type MyNum = number; // can also be doable

let age: MyNum = 84;
