// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  let newArray = [];
  this.forEach(function(i) {
    
    if (callback(i) == true) {
      newArray.push(i);
    }

  });
    console.log(newArray)
  // Only change code above this line
  return newArray;
  
};



const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});