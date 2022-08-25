//return lowest index the num can be put in array
function getIndexToIns(arr, num) {
    let x;
  console.log(arr.sort());
    for(let i in arr){
        if(arr[i] > num){
            x = i ;
            break;       
        }
    }
  return x;
}

//console.log(getIndexToIns([60, 40, 80, 90], 50));
console.log(getIndexToIns([10, 20, 30, 40, 70, 50], 35));
