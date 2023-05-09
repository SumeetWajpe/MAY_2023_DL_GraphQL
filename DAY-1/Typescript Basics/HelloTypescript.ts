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
function Add(x: number, y: number): number {
  return x + y;
}

var result: number = Add(20, 30);
console.log("The addition is : " + result);
