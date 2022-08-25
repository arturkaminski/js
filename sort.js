function getIndexToIns(arr, num) {
  arr.sort(function(a, b){
    if(a > b)
      return 1;
    if(a < b)
      return -1;
    return 0;
  });
  if (arr.length == 0){
    return 0;
  }
  else{
  const isLarger = (element) => element >= num;
    if (arr.findIndex(isLarger) == -1)
        return arr.length;
    else
        return arr.findIndex(isLarge);
  }
}



console.log(getIndexToIns([10, 20, 30, 40, 70, 50], 75));
