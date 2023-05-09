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
var cars: string[] = ["BMW", "AUDI", "MERC"];
// let firstCar = cars[0];
// let secondCar = cars[1];
// OR
let [firstCar, , secondCar] = cars;
console.log(firstCar);
console.log(secondCar);

//  Destructuring - Objects
var player = { fname: "Djokovic", country: "Serbia", isWorldNo1: true };
// let fname = player.fname;
// let country = player.country;
// OR
let { country, fname } = player;
console.log(fname);
