function confirmEnding(str, target) {
    let fal = 0;
  for (let i in target){
      console.log(target.length - i);
      console.log(target[i]);
  if(str[(str.length - 1) - i] != target[(target.length -1) - i])
    fal = 1;
  }
    if (fal == 0)
        return true;
    else
        return false;
}

console.log(confirmEnding("Bastian", "k"));
