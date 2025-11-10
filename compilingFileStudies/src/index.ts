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

// tsc --watch will compile for each change saved
// tsc --init
// tsc will compile everything on the folder that is open on terminal
