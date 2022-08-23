function findLongestWordLength(str) {
  let word = 0;
  let word1 =0;
  for(let i=0; i < str.length; i++ ){
    //  console.log(str[i]);
    if((str[i] != " ")&&(i< str.length -1 )){
        console.log(str[i]);
      word++;
    }
    else if(((str[i]==" ")||(i == str.length -1))&&(word > word1)){
        console.log(word);
        if(i== str.length -1)
            word++;
      word1 = word;
        word =0;
    }
      else
          word =0;
  }
    console.log(word1);
  return word1;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
//findLongestWordLength("The quick brown fox jumped over the lazy dog");
