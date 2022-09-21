function rot13(str) {
  //console.log(str.length);
 //console.log(str[0]);
  
  let str1=[];
  let lStr=parseInt(str.length);
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let alphabet1=[]
  alphabet1 = alphabet.split("")
  //console.log(alphabet1)
  let lAlpha= parseInt(alphabet1.length);
  //console.log(alphabet1.length)
  let traduc = []
  let tra=0//, i=0;
  //console.log(alphabet1[7])
  
  let indexLet=0;

  //console.log(alphabet.indexOf(str[0]))
//console.log(tra[3])
  for (let i=0 ;i < lStr; i++){
    //console.log(indexLet);
    indexLet=alphabet.indexOf(str[i]);
    if ((indexLet+13) < lAlpha && indexLet>=0 ){
      tra = indexLet+13;
      console.log(tra)
      traduc.push(alphabet[tra])

    }else if(indexLet+13 >= lAlpha){
      tra=(indexLet+13)-lAlpha;
      traduc.push(alphabet[tra])
      console.log(tra)
    }else if((indexLet) < 0){
      traduc.push(str[i])
      console.log(tra)
    }
    
   // console.log(traduc)
  }
  console.log(traduc.toString())
  return traduc.join("");
}

rot13("SERR PBQR PNZC");