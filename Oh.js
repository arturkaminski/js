let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
//let result = ohRegex.test(ohStr);
let result = ohStr.match(ohRegex);

console.log(result)
