var name = "Aram";
let age = 18;
const city = "Yerevan";

console.log(name, age, city);

document.getElementById("text").innerHTML = "Բարև";

let num = 10;
let text = "Hello";
let arr = [1, 2, 3];
let obj = { name: "Aram" };
let date = new Date();

console.log(num, text, arr, obj, date);

let a;
let b = null;

console.log(a);
console.log(b);

console.log(typeof a);
console.log(typeof b);

if (typeof document !== "undefined") {
    console.log("JavaScript-ը աշխատում է");
}