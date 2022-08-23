let sampleWord = "astronaut99";
//let pwRegex = /(?=\w{5,})|(?=\d+)/; // Change this line
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
//let result = pwRegex.test(sampleWord);
let result = sampleWord.match(pwRegex);
console.log(result);
