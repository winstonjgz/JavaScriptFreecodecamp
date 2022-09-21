function destroyer(arr) {
  const arrRem = Object.values(arguments).slice(1);
  const fArray = [];

  for (let i = 0; i < arr.length; i++) {
    let rveElement = false;
    for (let j = 0; j < arrRem.length; j++) {
      if (arr[i] === arrRem[j]) {
        rveElement = true;
      }
    }
    if (!rveElement) {
      fArray.push(arr[i]);
    }
  }
  return fArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);