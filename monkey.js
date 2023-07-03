function chunkArrayInGroups(arr, size) {
    let j = 0;
let arr1 = [[]];
let arr2 = [];
let arr3 = [];
for (let i in arr){
    console.log(arr[i]);
    if(arr1[j].length < size){
        arr1[j].push(arr[i]);
        console.log(arr1);
        console.log(j);
        }
    else if(i == arr.length -1){
        arr2.push(arr1);
        console.log(arr2);
        arr1 = [];
        j= 0;
   }
    else{
        arr2.push(arr1);
        arr1 = [[]];
        j = 0;
    }
}
    arr3.push(arr1);
    arr3.push(arr2);
  return arr3;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
