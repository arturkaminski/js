let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);
let aRegex = /t[a-z]*?i/;
let txt = "titanic";
let r = txt.match(aRegex);
console.log(r);
