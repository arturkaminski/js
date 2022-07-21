function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
    return [];
  }
  else{
    const cArray = rangeOfNumbers(startNum, endNum - 1 );
    cArray.push(endNum);
    //  console.log(cArray);
      return cArray;
  }
};
console.log(rangeOfNumbers(1,5));
