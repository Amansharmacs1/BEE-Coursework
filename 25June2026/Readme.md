var
Function scope
✅ Re-declare
✅ Re-assign
Hoisted → undefined

let
Block scope
❌ Re-declare
✅ Re-assign
Hoisted → TDZ(Temporal Dead Zone)

const
Block scope
❌ Re-declare
❌ Re-assign
Hoisted → TDZ(Temporal Dead Zone)

Note: const prevents reassignment of the variable, not mutation of the object it references.


DATA TYPES
JavaScript has 8 data types, divided into Primitive and Non-Primitive (Reference) types.
1. Primitive values are immutable (their value cannot be changed).
Data Type	Example
Number	    10, 3.14, -5
String	    "Hello", 'World'
Boolean	    true, false
Undefined	let x;  -behave as datatype and value both
Null	    let y = null;
BigInt	    12345678901234567890n
Symbol	    Symbol("id")

2. Non-Primitive (Reference) Data Type
There is one reference type: Object, Arrays, functions, dates, etc., are all kinds of objects.

Object
let student = {
    name: "Aman",
    age: 21
};

console.log(typeof student);

Array
let arr = [10, 20, 30];

console.log(typeof arr);
To specifically check if something is an array:

Function
function greet() {
    console.log("Hello");
}

console.log(typeof greet);
Although typeof returns "function", functions are objects in JavaScript.

In JavaScript, every value is treated as either truthy or falsy when used in a boolean context (such as an if statement).

Falsy Values (Only 8)
These values evaluate to false:

false
0
-0
0n        // BigInt zero
""        // Empty string
null
undefined
NaN


Truthy Values

Everything except the 8 falsy values is truthy.

Examples:
true
1
-1
100
"Hello"
"0"
"false"
[]
{}
function(){}
42n
Infinity


