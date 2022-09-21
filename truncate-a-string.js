function truncateString(str, num) {
  let trunc="";
  for (let i=0; i<num; i++){
    trunc+=str[i];

  }
  if(num>=str.length){
    return str;
  }else{
    return trunc+"...";
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);