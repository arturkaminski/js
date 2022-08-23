let username = "JackOfAllTrades";
//let userCheck =/^(([a-z][a-z])|([a-z][a-z]+[0-9][0-9]?)|[a-z][a-z])$/i; // Change this line
let userCheck = /[a-z]+/i;
let result = username.match(userCheck);
console.log(result)
