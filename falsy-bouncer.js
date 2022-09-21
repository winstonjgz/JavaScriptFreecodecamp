function bouncer(arr) {
  let listTrue = []
  for (let verif in arr){
    if (arr[verif]) listTrue.push(arr[verif]);
    
  }
  console.log(listTrue)
  return listTrue;
}

bouncer([7, "ate", "", false, 9]);