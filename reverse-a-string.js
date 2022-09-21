function reverseString(str) {
  let n=0;
  let lStr=[];
  lStr=str.length-1;
   
  let myArray = "";
 
  //console.log(str[4]);
  for (let i =(lStr); i >=0; i--){
     myArray += str[i];
     
  }
   return myArray;
}

reverseString("hello");