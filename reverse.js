function reverseString(str) {
  let ar=[];
  for(let i=0; i< str.length; i++){
      console.log(str[i]);
    ar.unshift(str[i]);
  }
    console.log(ar.join(''));
 str = "";
    for(let j=0; j < str.length; j++){
        console.log(ar[j]);
        str += ar[j];
    }
 
  return str;
}

console.log(reverseString("hello"));
