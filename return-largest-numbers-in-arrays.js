function largestOfFour(arr) {
  let maxnum=0;
  let newArr=[];
  for (let i=0; i<arr.length;i++){
    let maxnum = arr[i][0];
    for (let j=0; j<arr[i].length; j++){
        if (arr[i][j]>maxnum ){
        maxnum = arr[i][j];
        }
           
    }
    newArr[i]=maxnum;
    
  }console.log(newArr);
  return newArr;
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);