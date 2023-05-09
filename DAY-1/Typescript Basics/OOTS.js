// interface IPlayer {
//   name: string;
//   country: string;
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var allCars = __spreadArray(__spreadArray(__spreadArray([], cars, true), moreCars, true), ["HONDA"], false);
console.log(allCars);
// Spread Operator - Objects
var person = { fname: "Sachin", lname: "Tendulkar", country: "INDIA" };
var player = __assign(__assign({}, person), { sport: "Cricket", country: "Bharat" });
console.log(player);
// Rest parameter
function PrintBook(author) {
    var titles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        titles[_i - 1] = arguments[_i];
    }
    console.log(author, titles);
}
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", "India 2020");
PrintBook("Unknown");
