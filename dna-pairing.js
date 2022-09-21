function pairElement(str) {
  var DNAc=str;
  let chainDNA= [];
  //console.log(chainDNA.push(["T","A"]))
  //console.log(chainDNA)
  for (let i=0; i<DNAc.length; i++){
    //console.log(DNAc[0])
    if (DNAc[i]=="T"){
      chainDNA.push(["T", "A"]);

    }else if (DNAc[i]=="A"){
      chainDNA.push(["A", "T"]);

    }else if (DNAc[i]=="G"){
      chainDNA.push(["G", "C"]);

    }else if (DNAc[i]=="C"){
      chainDNA.push(["C", "G"]);

    }
   console.log(chainDNA)
  
  }
  return chainDNA;
}

pairElement("GCG");
pairElement("ATCGA");