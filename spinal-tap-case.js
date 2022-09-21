function spinalCase(str) {
  let strL = str.split(/(?=[A-Z])|\_/)
  console.log(strL)
  strL=strL.join(" ")
  
  strL = strL.toLowerCase(strL);

  strL = strL.split(/\s+/)

  strL = strL.join("-")

  console.log(strL)

  return strL;
}

spinalCase('This Is Spinal Tap');
