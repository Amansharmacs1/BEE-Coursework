console.log("Welcome to 29 June 2026");

//basic function syntex
function greet(name){
    console.log(`Hi, ${name}`);
}
// greet("Ronak");
// greet("Harshii");

// Anonymous arrow function
const sayGoodMorning=()=>{
    console.log("Good Morning");
}
// sayGoodMorning();

function test(){
    console.log("Test called");
}
// console.log(test());
// console.log(test);

function printNumber(x,y){
    console.log("Number is",x,"and",y);
}
// printNumber(5,6);
// printNumber(12);
// printNumber(12,1,8);

console.log("10"+1);
console.log(10+"1");
console.log(10+Number("1"));
console.log(10+Number("1s"));

console.log(parseInt("123abc")); //123
console.log(parseInt("a123abc"));  //NaN
console.log(Number("123abc"));  //NaN

