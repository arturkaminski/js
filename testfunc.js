function findElement(arr, func) {
  let numx = 0;
  let num =0;
  for( let i =0; i < arr.length; i++){
    num=arr[i];
     // console.log(num);
      console.log(func(num));
    if(func()){
      numx = num;
        break;
    }
  }
  return numx;
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
