// interface IPlayer {
//   name: string;
//   country: string;
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var cars = ["BMW", "AUDI", "MERC"];
var moreCars = ["TATA", "MAHINDRA"];
var allCars = __spreadArray(__spreadArray([], cars, true), moreCars, true);
console.log(allCars);
