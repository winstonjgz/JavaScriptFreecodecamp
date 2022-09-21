function steamrollArray(arr) {
  
  let arr1 = [];
 

  for (let i=0; i<arr.length; i++){
    if (Array.isArray(arr[i])){
    arr1.push(...steamrollArray(arr[i]));
   }else{
     arr1.push(arr[i])
   }
   console.log(arr1);
  }
  return arr1;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]])

