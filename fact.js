function factorialize(num) {
    let f = num;
  for(let i=1; i < num; i++){
    f = f *(num-i);
  }
  return f;
}

console.log(factorialize(5));
