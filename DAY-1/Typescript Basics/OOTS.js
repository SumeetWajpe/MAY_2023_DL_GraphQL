// interface IPlayer {
//   name: string;
//   country: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Classes
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 100; }
        this.id = 1; // private / public /protected
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        return "The car ".concat(this.name, " is running at ").concat(this.speed, " kmph !");
    };
    return Car;
}());
// var carObj: Car = new Car();
// console.log(carObj.accelerate());
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, useNitroPower) {
        var _this = _super.call(this, name, speed) || this;
        _this.useNitroPower = false;
        _this.useNitroPower = useNitroPower;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + " Can use nitro Power ? " + this.useNitroPower;
    };
    return JamesBondCar;
}(Car));
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
function Swap(x, y) {
    var t;
    t = x;
    x = y;
    y = t;
}
Swap(20, 30);
Swap("Hello", "World");
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point = new Point();
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
var Designation;
(function (Designation) {
    Designation[Designation["Developer"] = 100] = "Developer";
    Designation[Designation["Trainer"] = 101] = "Trainer";
    Designation[Designation["Tester"] = 102] = "Tester";
    Designation[Designation["Architect"] = 103] = "Architect";
    Designation[Designation["CEO"] = 104] = "CEO";
})(Designation || (Designation = {}));
var d = Designation.Trainer;
console.log(d);
console.log(Designation[d]);
var Emp = /** @class */ (function () {
    function Emp() {
    }
    return Emp;
}());
var e = new Emp();
e.designation = Designation.Architect;
