function frankenSplice(arr1, arr2, n) {
    let arr=[];
    for(let j in arr2)
        arr[j] = arr2[j];
    for (let i in arr1){
        arr.splice(n, 0, arr1[i]);
        n++;
    }
    console.log(arr2);
  return arr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
