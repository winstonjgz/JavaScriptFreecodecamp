function fearNotLetter(str) {
for (let i = 0; i < str.length; i++) {
    
    let code = str.charCodeAt(i);

  
    if (code !== str.charCodeAt(0) + i) {
      
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;


}

fearNotLetter("abce");