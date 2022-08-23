//to replace first letter in every word in the string
function titleCase(str) {
    let word = str.substring(0,1).toUpperCase() + str.substring(1);
    let x;
   // console.log(word);
            let strA = str.split(" ");
        console.log(strA);
    for(let i in strA){
    x = strA[i].charAt(0);
        console.log(x);
      let  X = x.toUpperCase(); 
        console.log(X);
    strA[i][0] = X; 
        console.log(strA[i]);
        console.log(strA[i][0]);
    }
    return strA;
}

console.log(titleCase("I'm a little tea pot"));
