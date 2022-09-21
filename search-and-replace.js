function myReplace(str, before, after) {
  let after0="";
  let after2 = after;
  
  if (before[0] === before[0].toUpperCase()){
    after0=after2[0].toUpperCase();
    //console.log(after0)
    let after1=after2.slice(1,(after.length));

    after0=after0+after1;
  }else{
    after0=after2[0].toLowerCase();
    //console.log(after0)
    let after1=after2.slice(1,(after.length));

    after0=after0+after1;
  }
  
  let chang= str.replace(before,after0);
  console.log(chang)

  return chang;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")