Array.prototype.myMap = function(callback) {
    console.log("program start\n");
  const newArray = [];
  // Only change code below this line
  for(let i = 0; i < this.length; i++){
      console.log(this[i]);
      console.log("*****************\n");
    newArray.push(callback(this[i]));  
  }

  // Only change code above this line
  return newArray;
};

console.log(JSON.stringify([23, 65, 98, 5, 13].myMap(item => item * 2)));
console.log("\n******************************************************\n");
console.log(JSON.stringfy([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])));
//console.log(JSON.stringify(x));
