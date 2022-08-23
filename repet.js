function repeatStringNumTimes(str, num) {
  let str1 = [];
  if (num < 0)
    return ""
  else
    for (let i =0; i < num; i++){
      str1.push(str);
    //    console.log(str1);
    }
    return str1.join('');
}

console.log(repeatStringNumTimes("abc", 3));
