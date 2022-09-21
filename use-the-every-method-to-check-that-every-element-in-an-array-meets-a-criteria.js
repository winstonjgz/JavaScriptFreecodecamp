function checkPositive(arr) {
  // Only change code below this line
  //console.log(arr);

  return arr.every(function(verif){
    
    return verif >= 0;

  });

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);