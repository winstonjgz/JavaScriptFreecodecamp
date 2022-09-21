function sumPrimes(num) {
  let nums=[]
  let Prim=[];
  let sum=0;

  for (let i=2; i<=num; i++){
    nums.push(i);
    
  }
console.log(nums)

//console.log(nums.indexOf(4))

function Primo(num){
  for (let i=2; i <= Math.sqrt(num);i++){
      if (num % i == 0){
        return false;
      }
  
  }
  return true
}

//console.log(Prim)

    for (let i=2; i<=num; i++){
      if (Primo(i))
        sum = sum + i;
      
    }
    console.log(sum)
    return sum    





}

sumPrimes(10);