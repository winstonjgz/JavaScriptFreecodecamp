function chunkArrayInGroups(arr, size) {
  let lista = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) lista.push(arr[a]);
    else {
      lista.push(arr[a]);
      result.push(lista);
      lista = [];
    }
  }

  if (lista.length !== 0) result.push(lista);
  return result;
  console.log(lista)
  console.log(listaQt)
  console.log(veces)

  //return lista;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);