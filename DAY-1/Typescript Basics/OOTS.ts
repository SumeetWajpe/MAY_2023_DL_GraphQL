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
