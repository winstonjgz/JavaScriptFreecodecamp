function findLongestWordLength(str) {
 let words = str.split(' ');
 let longWord=0;
 for (let i=0; i< words.length;i++){
   if (words[i].length>longWord){
     longWord=words[i].length;
   }
   
 }

return longWord;

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");