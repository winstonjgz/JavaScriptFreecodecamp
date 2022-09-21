function palindrome(str) {
  let str1 = str.split(/\s+/)
  let str3=""
  let strL= ""
    strL.trim()
    strL = str1.toString().toLowerCase()
    strL = strL.replace(/\,/g, '')
    strL = strL.replace(/\./g, '')
    strL = strL.replace(/\" "/g, '')
    strL = strL.replace(/\_/g, '')
    strL = strL.replace(/\-/g, '')
    strL = strL.replace(/\(/g, '')
    strL = strL.replace(/\)/g, '')
  let nStr = strL.length-1
  //console.log(strL)
  //console.log(nStr)
  
  //console.log(str1[1])
  let str2="";

  //console.log(str2.push(strL[1]))
   
   //str2.push(str1[1]);
   //console.log(str2)
  /*for (var i=nStr; i < 0; --i){
      //console.log(str2)
     var str2 = str1.push(str1[i]);
      //console.log("el valor de str2 es:" + str2);
      return str3;
  }*/
  //console.log(str)
  let i = nStr;
 console.log("el largo del string es: "+nStr)
 console.log("el string base es: "+strL)
  while (i>-1){
    
    //console.log(i)
    //console.log(str1[i])

    if (strL[i]!== undefined){
    str2+=(strL[i])
    }else if(i==0){
      
      break;
    }
    i--
  }
   //console.log("el valor de str2 es:" +str2);
    //str3 = str2.join("")
    console.log("el string comparacion es: "+str2);
    //console.log(strL)

  if (str2 === strL){
      return true;
  }else{
      return false;
  }

   
}

palindrome("eye");
palindrome("0_0 (: /-\ :) 0-0")