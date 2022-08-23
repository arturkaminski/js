function truncateString(str, num) {
    let usert = (`[a-zA-Z0-9- ]{${num}}`);
    let strr = "";
  if(str.length > num){
        let result = str.match(usert);
      console.log(result);
      strr = result + '...';
      console.log(strr);
  }
    return strr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
