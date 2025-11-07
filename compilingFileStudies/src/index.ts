interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
}

const coco: Chicken = {
  breed: "black",
  eggsPerWeek: 4,
  name: "Coco",
};

// tsc --watch will compile from each change saved
// tsc --init
// tsc
