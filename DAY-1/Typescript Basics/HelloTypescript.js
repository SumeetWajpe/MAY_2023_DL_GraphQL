// var str = "Hello World !"; // Type Inferencing
// str = 100;
// console.log();
var x; // Type annotation
x = 100;
console.log(typeof x);
var s;
var b;
var y; // implicitly of type any - bad
y = 100;
y = "Hello";
y = true;
y = { name: "XYZ" };
// Functions
function Add(x, y) {
    return x + y;
}
var result = Add(20, 30);
console.log("The addition is : " + result);
