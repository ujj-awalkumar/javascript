//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol (for making values unique), BigInt

// JS is dynamically typed language

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail = undefined


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3458888888881111114221n
// console.log(typeof bigNumber);


// Non-Primitive or Reference Type

// Array, Objects, Functions

const heroes = ["Shaktiman","Naagraj","Doga"]
let myobj = {
    name: "Ujjawal",
    age: 22,

}

const myFunction=function() {
    console.log("Hello World");
}

// console.log(typeof scoreValue);

// console.log(typeof myFunction);
// console.log(typeof myobj)
// console.log(typeof heroes)
// console.log(typeof id);


//  *******************************************

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "ujjawalKumar"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "9122091758-2@ybl",
}

let userTwo = userOne

userTwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);