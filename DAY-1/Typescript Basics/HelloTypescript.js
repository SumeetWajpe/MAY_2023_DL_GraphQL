// var str = "Hello World !"; // Type Inferencing
// str = 100;
// console.log();
var x; // Type annotation
x = 100;
// console.log(typeof x);
var s;
var b;
var y; // implicitly of type any - bad
y = 100;
y = "Hello";
y = true;
y = { name: "XYZ" };
// Functions
function Add(x, y) {
    if (x == 0) {
        return "x cannot be 0 !";
    }
    return x + y;
}
var result = Add(20, 30);
// console.log("The addition is : " + result);
var z; // ES6
z = 10;
z = "Hello";
// if (true) {
//   let scopedVar: number;
//   scopedVar = 10;
//   console.log(scopedVar);
// }
var PI = 3.14; // ES6
// PI = 3.1454; // Error
// Function as an expression
var Square = function (x) {
    return x * x;
};
// console.log("The Square is : " + Square(10));
// Arrow Function - ES6
// var Square = (x: number) => {
//   return x * x;
// };
// OR
var Square = function (x) { return x * x; };
// console.log("The Square " is : " + Square(10));
var i = 20;
// console.log(`The square of ${i} is ${Square(i)}`);
// Parameters - Optional
// function PrintBook(author?: string, title?: string, publication?: string) {
//   console.log(author, title, publication);
// }
// PrintBook();
// Parameters - Default
function PrintBook(author, title, publication) {
    if (author === void 0) { author = "Unknown"; }
    if (title === void 0) { title = "Unknown"; }
    if (publication === void 0) { publication = "Unknown"; }
    console.log(author, title, publication);
}
// PrintBook();
// PrintBook("Dummy Author", "Dummy Title");
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", "Jaico");
// Arrays
// Javascript
// var cars = new Array("BMW", "AUDI", "MERC")
//  var cars = ["BMW", "AUDI", "MERC",10,true];
// Typescript
// var cars: string[] = ["BMW", "AUDI", "MERC"];
// Typescript way - Generics
var cars = new Array("BMW", "AUDI", "MERC");
cars.forEach(function (name) {
    console.log(name);
});
// OR - Arrow function
cars.forEach(function (name) { return console.log(name); });
// var Test = function () {
//   console.log("Testing 1 2 3 !");
// };
// Test();
var Test = function () { return console.log("Testing 1 2 3 !"); };
