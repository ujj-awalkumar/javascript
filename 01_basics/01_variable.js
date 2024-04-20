const accountId=13381
let accountEmail = "usual845303@gmail.com"
var accountPassword="123"
accountCity = "Bihar" // not suitable way to declare variable

let accountState;





// accountId=2  Not allowed, to reassign the value in const variable
console.log(accountId)

/*
Prefer not to use var beacause of issue in block scope and functional scope
*/

accountEmail = "abc@gmail.com"
accountPassword = "212"
accountCity = "Kolkata"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

