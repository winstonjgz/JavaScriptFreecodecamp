function sentensify(str) {
  // Only change code below this line
  let newArray = str.split(/\W/);
  let newArrayjoin= newArray.join(" ")
  console.log(newArrayjoin)
  return newArrayjoin;

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");