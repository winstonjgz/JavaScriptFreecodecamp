function translatePigLatin(str) {
 /* console.log(str[0])

  console.log(str+"way")
  let strSinV= str.split("");
  let strSinVoc = ""
  console.log(strSinV)
  for (let n=1; n< (strSinV.length); n++){
    //strSinVoc.push(strSinV[n])
    strSinVoc = strSinVoc + strSinV[n]
  }
  console.log(strSinVoc)
  //strSinVoc.join("")

  console.log(strSinVoc)


 // var str3 = str.shift();

  console.log(str.length)
  let vocales =  ["a","e","i","o","u"]
  //console.log(vocales)
  let str2=""
  console.log(str2)
  //console.log(vocales[0])

 for (let i=0; i < 5; i++){
   if(str[0].indexOf(vocales[i])==-1){
     str2 = strSinVoc+str[0]+"ay";
         
   }else{
     str2 = str+"way"
   }

 }
  console.log(str2)
  
  return str2;  */
   
  var strSinVoc = "";
  var strSinV = /[aeiou]/gi;

  if (str[0].match(strSinV)) {
    strSinVoc = str + "way";
  } else if (str.match(strSinV) === null) {
    
    strSinVoc = str + "ay";
  } else {
   
    var vowelIndice = str.indexOf(str.match(strSinV)[0]);

   strSinVoc = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return strSinVoc;

}

translatePigLatin("consonant");
translatePigLatin("algorithm")