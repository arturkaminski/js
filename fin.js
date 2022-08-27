function mutation(arr) {
  arr[0].toUpperCase();
  arr[1].toUpperCase();
  let a = arr[0].split("");
  let b = arr[1].split("");
  let x = true;  
  for (let i in b){
    let c = a[i];
    console.log(a.indexOf(c));
    if (b.indexOf(c) == -1)
      x = false;
      
  }
  return x;
}

console.log(mutation(["hello", "hel"]));
