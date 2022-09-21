
function sumAll(arr) {
  let arrSum = [];
  let arrSum2=0;
  let arrMin = Math.min(...arr);
  let arrMax = Math.max(...arr)
  console.log(arr)
  
  for (let i=arrMin; i<=arrMax ; i++){

      arrSum.push(i);
          
  }

  for (let n=0; n<arrSum.length; n++){
    arrSum2= arrSum2 + arrSum[n];
  }

  
  return arrSum2;
  
}

sumAll([1, 4]);