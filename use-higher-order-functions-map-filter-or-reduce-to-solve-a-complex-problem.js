const squareList = arr => {
  // Only change code below this line
let arrPositive= arr.filter(arrpos => arrpos >= 0)
console.log(arrPositive)
let arrInteger= arrPositive.filter(arrInt => (Number.isInteger(arrInt)==true) )
console.log(arrInteger)
let sqrArr= arrInteger.map(sqrPos=> sqrPos*sqrPos )

  return sqrArr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);