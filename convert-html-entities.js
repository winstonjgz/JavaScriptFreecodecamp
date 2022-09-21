function convertHTML(str) {
  let cvStr= str.split("")
  let cvStr2="";
  console.log(cvStr)

for (let i=0; i< cvStr.length; i++){
  if (cvStr[i]==="&"){
    cvStr[i]="&amp;"
  }else if (cvStr[i]==="<"){
    cvStr[i]="&lt;"
  }else if (cvStr[i]===">"){
    cvStr[i]="&gt;"
  }else if (cvStr[i]==="\'"){
    cvStr[i]="&apos;"
  }else if (cvStr[i]==="\""){
    cvStr[i]="&quot;"
  }else{
    cvStr[i]
  }
  cvStr2=cvStr2+(cvStr[i])
}
console.log(cvStr2)
  return cvStr2;
}

convertHTML("Dolce & Gabbana");
convertHTML("Schindler's List")
convertHTML("abc")