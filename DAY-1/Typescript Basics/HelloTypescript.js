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
    if (x == 0) {
        return "x cannot be 0 !";
    }
    return x + y;
}
var result = Add(20, 30);
console.log("The addition is : " + result);
var z;
z = 10;
z = "Hello";
if (true) {
    var scopedVar = void 0;
    scopedVar = 10;
    console.log(scopedVar);
}
var PI = 3.14;
// PI = 3.1454; // Error
// Function as an expression
var Square = function (x) {
    return x * x;
};
console.log("The Square is : " + Square(10));
// Arrow Function
var Square = function (x) {
    return x * x;
};
console.log("The Square is : " + Square(10));
