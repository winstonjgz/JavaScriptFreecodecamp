function binaryAgent(str) {
  let lStr = str.length;
  console.log(lStr);
  let spStr = str.split(" ");
  console.log(spStr.length);
  let trad="";
  let trad1=[]

  for (let i=0; i<spStr.length; i++){
      trad1.push(String.fromCharCode(parseInt(spStr[i], 2)))

      //trad= trad +(trad1)
      console.log(trad1.join(""))
  }
    trad1 = trad1.join("")

  return trad1;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");