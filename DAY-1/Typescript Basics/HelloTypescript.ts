// var str = "Hello World !"; // Type Inferencing
// str = 100;
// console.log();

var x: number; // Type annotation
x = 100;
console.log(typeof x);

var s: string;
var b: boolean;
var y; // implicitly of type any - bad
y = 100;
y = "Hello";
y = true;
y = { name: "XYZ" };

// Functions
function Add(x: number, y: number): number | string {
  if (x == 0) {
    return "x cannot be 0 !";
  }
  return x + y;
}

var result: number | string = Add(20, 30);
console.log("The addition is : " + result);

let z: number | string; // ES6
z = 10;
z = "Hello";

if (true) {
  let scopedVar: number;
  scopedVar = 10;
  console.log(scopedVar);
}

const PI: number = 3.14; // ES6
// PI = 3.1454; // Error

// Function as an expression
var Square = function (x: number) {
  return x * x;
};
console.log("The Square is : " + Square(10));

// Arrow Function - ES6
// var Square = (x: number) => {
//   return x * x;
// };
// OR
var Square = (x: number): number => x * x;

// console.log("The Square " is : " + Square(10));

let i = 20;
console.log(`The square of ${i} is ${Square(i)}`);

// Parameters - Optional

// function PrintBook(author?: string, title?: string, publication?: string) {
//   console.log(author, title, publication);
// }

// PrintBook();

// Parameters - Default
function PrintBook(
  author: string = "Unknown",
  title: string = "Unknown",
  publication: string = "Unknown",
) {
  console.log(author, title, publication);
}

PrintBook();
PrintBook("Dummy Author", "Dummy Title");
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", "Jaico");

// Arrays
// Javascript
// var cars = new Array("BMW", "AUDI", "MERC")
//  var cars = ["BMW", "AUDI", "MERC",10,true];

// Typescript
// var cars: string[] = ["BMW", "AUDI", "MERC"];

// Typescript way - Generics
var cars: Array<string> = new Array<string>("BMW", "AUDI", "MERC");
