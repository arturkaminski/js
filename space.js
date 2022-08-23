let hello = "   Hello, World!  .";
let wsRegex = /\s+(?!(\w+,\s+\w+!))\s+/g; // Change this line
let result = hello.replace(wsRegex, "" ); // Change this line

let wsRegex1 = /(\s+)\.$/; // Change this line
let result1 = result.replace(wsRegex1, "" ); // Change this line
console.log(hello.match(wsRegex));
console.log(result);
console.log(result.match(wsRegex1));
console.log(result1);
