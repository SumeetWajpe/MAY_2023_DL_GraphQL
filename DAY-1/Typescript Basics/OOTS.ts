// interface IPlayer {
//   name: string;
//   country: string;
// }

// var player:IPlayer = { name: "Djokovic", country: "Serbia", xyz: 123 };

// type IPlayer = {
//   name: string;
//   country: string;
// };

// var player: IPlayer = { name: "Djokovic", country: "Serbia", xyz: 123 };

//  Destructuring - Arrays
// var cars: string[] = ["BMW", "AUDI", "MERC"];
// let firstCar = cars[0];
// let secondCar = cars[1];
// OR
// let [firstCar, , secondCar] = cars;
// console.log(firstCar);
// console.log(secondCar);

//  Destructuring - Objects
// var player = {
//   fname: "Djokovic",
//   country: "Serbia",
//   isWorldNo1: true,
//   nickname: "GOAT",
// };
// let fname = player.fname;
// let country = player.country;
// OR
// let { country, fname, ...restProps } = player;
// console.log(fname);
// console.log(restProps);

// Spread Operator - Arrays
var cars: string[] = ["BMW", "AUDI", "MERC"];
var moreCars: string[] = ["TATA", "MAHINDRA"];
var allCars: string[] = [...cars, ...moreCars, "HONDA"];
console.log(allCars);

// Spread Operator - Objects
let person = { fname: "Sachin", lname: "Tendulkar", country: "INDIA" };
let player = { ...person, sport: "Cricket", country: "Bharat" };
console.log(player);

// Rest parameter
function PrintBook(author: string, ...titles: string[]) {
  console.log(author, titles);
}
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", "India 2020");
PrintBook("Unknown");

// Classes

class Car {
  private id: number = 1; // private / public /protected
  name: string;
  speed: number;

  constructor(name: string = "BMW", speed: number = 100) {
    this.name = name;
    this.speed = speed;
  }

  accelerate(): string {
    return `The car ${this.name} is running at ${this.speed} kmph !`;
  }
}

// var carObj: Car = new Car();
// console.log(carObj.accelerate());

class JamesBondCar extends Car {
  useNitroPower: boolean = false;
  constructor(name: string, speed: number, useNitroPower: boolean) {
    super(name, speed);
    this.useNitroPower = useNitroPower;
  }
  accelerate(): string {
    return super.accelerate() + " Can use nitro Power ? " + this.useNitroPower;
  }
}

var jbc = new JamesBondCar("Aston Martin", 300, true);
console.log(jbc.accelerate());

// interface IPerson {
//   name: string;
//   age: number;
//   walk: () => void;
//   talk?: () => void;
// }

// interface IEmployee {
//   id: number;
//   salary: number;
// }

// class Employee implements IPerson, IEmployee {
//   id: number;
//   salary: number;
//   name: string;
//   age: number;
//   walk(): void {
//     console.log("Walking..");
//   }
// }

// Interface extending interface

// interface IEmployee extends IPerson {
//   id: number;
//   salary: number;
// }
// class Employee implements IEmployee {
//   id: number;
//   salary: number;
//   name: string;
//   age: number;
//   walk(): void {
//     console.log("Walking..");
//   }
// }

// Generics

function Swap<T>(x: T, y: T) {
  var t: T;
  t = x;
  x = y;
  y = t;
}

Swap<number>(20, 30);
Swap<string>("Hello", "World");

class Point<T> {
  x: T;
  y: T;
}

var point: Point<number> = new Point<number>();

// Contraints in Generics
// class Emp {
//   name: string;
// }

// class Mgr extends Emp {}

// class VicePresident extends Emp {}

// class Freelancer {}

// class Company<T extends Emp> {}

// var company = new Company<Freelancer>();// Error

// Enum

enum Designation {
  Developer = 100,
  Trainer,
  Tester,
  Architect,
  CEO,
}

var d = Designation.Trainer;
console.log(d);
console.log(Designation[d]);

class Emp {
  name: string;
  designation: Designation;
}

var e = new Emp();
e.designation = Designation.Architect;
