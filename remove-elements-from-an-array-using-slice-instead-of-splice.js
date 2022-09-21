function nonMutatingSplice(cities) {
  // Only change code below this line
  
  const newArray = cities.slice(0,3);
  console.log(newArray)
  return newArray

  // Only change code above this line
  
}


const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);