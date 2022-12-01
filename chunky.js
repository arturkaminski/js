function chunkArrayInGroups(arr, size) {

    let arr1 = [];

let l = arr.length;
let cols = Math.floor(l/size);
const remainder = l % size;
    if(remainder != 0){
        cols = cols + 1;
    }
for( var j = 0; j < cols; j++){
    arr1[j] = [];
}
let x =0;
let a =0;
for (let i in arr){
    if (x < size){
        arr1[a][x] = arr[i];
        x++;
    }
    else{
        a++;
        x =0;
        arr1[a][x] = arr[i];
        x++;
    }
}    
    console.log("Result");
    console.log(arr1);
  return arr1;
}
chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2);
chunkArrayInGroups([0,1,2,3,4,5,6], 3);
