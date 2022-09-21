function mutation(arr) {
  let valor = arr[1].toLowerCase();
  let lista=arr[0].toLowerCase();
  let num = 0;
  

  /*if (arr[0].length <arr[1].length){
    
    num=arr[1].length;
    
  }else{
    num=arr[0].length
  }*/
 // console.log("el numero es: "+num);
  for (let i=0; i < valor.length; i++){
    if (lista.indexOf(valor[i])<0) return false;
    }
   return true;
    
  
  

}

mutation(["hello", "hey"]);