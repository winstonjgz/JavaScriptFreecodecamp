function factorialize(num) {
  let num1=1;
  for (let i = 1; i<=num;i++)
  num1 = i *num1
  return num1;
}

factorialize(5);