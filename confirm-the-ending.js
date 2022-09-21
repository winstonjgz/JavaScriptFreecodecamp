function confirmEnding(str, target) {
  let lTarget = target.length;
  let lString = str.length;
  let extract="";
  
  let difStrTarg = lString - lTarget;

  for (let i=difStrTarg; i<lString; i++){
    extract+=(str[i]);
    
    
  }

 console.log(extract);

  if (extract == target){
    return true
  }else{
    return false
  }
  
}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name")