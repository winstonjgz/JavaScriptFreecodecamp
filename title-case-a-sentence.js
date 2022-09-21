function titleCase(str) {
  
  let strSpl= str.split(" ");
  let convertStr = [];
  for (let st in strSpl){
    convertStr[st] = strSpl[st][0].toUpperCase() + strSpl[st].slice(1).toLowerCase() ;
  }

  

  return convertStr.join(" ");
}

titleCase("I'm a little tea pot");