//to replace first letter in every word in the string
function titleCase(str) {
    let x;
    let strA = str.split(' ');
    for(let i in strA){
    x = str[i].charAt(0);
       let  wordA = strA[i];
       let  wordB = wordA.substring(0,1).toUpperCase() + wordA.substring(1);
        strA[i] = wordB;
    }
    let strB = strA.join(' ');
    return strB;
}

console.log(titleCase("I'm a little tea pot"));
//console.log(titleCase(""));
