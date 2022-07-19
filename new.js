let count = 0;

function cc(card) {
  // Only change code below this line
  let x;
  if((card > 1)&&(card < 7)){
    count += 1;
  }
  else if((card > 6 )&&(card < 10)){
    count += 0;
  }
  else if((card === '10')||(card === 'J')||(card ==='Q')||(card ==='K')||(card ==='A')){
    count -= 1;
  }
  if( count > 0){
    x = count + " Bet";
  }
  else if((count === 0)||(count <0)){
    x = count + " Hold";
  }
    console.log(x);
    return x;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
