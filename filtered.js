function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
    console.log(arr);
    console.log(newArr);
for(let i=0; i < arr.length ; i++){
    for(let j=0; j< arr[i].length  ; j++){
        if(arr[i][j] == elem){
            console.log("i="+i );
            console.log("j="+j );
            console.log(arr[i].length -1);
            arr.splice (i , 1  );
            i--;
            console.log(arr);
            break;
        }
    }
}
   newArr = arr;
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [3, 6, 4], [4, 14, 26], [19, 3, 9]], 3));
