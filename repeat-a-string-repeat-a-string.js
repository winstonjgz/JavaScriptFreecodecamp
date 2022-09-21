function repeatStringNumTimes(str, num) {
  let time=""
  for (let i=0; i<num; i++){
    time += str;
    
  }
  return time;
}

repeatStringNumTimes("abc", 3);