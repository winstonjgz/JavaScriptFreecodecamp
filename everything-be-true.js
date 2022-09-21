function truthCheck(collection, pre) {
  console.log(collection.length)
  let ans = false;
  let truePre=0;
  
  for (let i=0; i<collection.length; i++ ){

    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
        truePre++;
        //return ans= true;
        
     }else{
        
        return ans;

      }
  }

  console.log(ans)
  return truePre==collection.length;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");