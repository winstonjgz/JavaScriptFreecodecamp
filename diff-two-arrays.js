function diffArray(arr1, arr2) {
  const newArr = [];
  let inArr=0;
  let allL=0;
  let larr1 = arr1.length;
  let larr2 = arr2.length;
  let v1=[];
  let v2=[];

  if (larr1 < larr2){
    allL = larr2;
    v1=arr2;
    v2=arr1;
  }else{
    allL = larr1;
    v1=arr1;
    v2=arr2;
  }
  let vT= v1.concat(v2)
  allL=vT.length
  console.log(v1)
console.log(allL);
//console.log(v1);
//console.log(v2);

for (let i=0; i<allL; i++){
  
    if (v1.includes(vT[i])) {
        //console.log("esta el: "+v1[i])
        
        }else{
       // console.log("No esta el: "+v1[i])
        newArr.push(vT[i])
          
        }

        if (v2.includes(vT[i])) {
        //console.log("esta el: "+v1[i])
        
        }else{
       // console.log("No esta el: "+v1[i])
        newArr.push(vT[i])
          
        }
  
  }
  console.log(newArr);
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])