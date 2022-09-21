function sumFibs(num) {
  let fib0=0;
  let fib1=1;
  let sum=0

  while (fib1 <= num){
    if (fib1 %2 !==0){
      sum += fib1
    }
    fib1 += fib0;
    fib0 = fib1 -fib0
  }


  console.log(fib1)
  console.log(sum)
  return sum;

}

sumFibs(4);
sumFibs(1000)