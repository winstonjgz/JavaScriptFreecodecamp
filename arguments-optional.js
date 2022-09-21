function addTogether() {
  //console.log(Number.isInteger(arguments));
 console.log(arguments.length);
  const [x,y]= arguments
    if (arguments.length==2){
        if(Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])){
    
        let x=arguments[0];
        let y=arguments[1]

        return x+y;

        }else{
          return undefined;
        }
        
    }else if (arguments.length!=2){
        if(typeof(x)!="number"){

          return undefined;
        }else if(y === undefined){
            function addY(y){
              if(typeof(y)!="number"){
              console.log(typeof(y))
          
              return undefined;
        
            }else{
              return x+y
            }
    
          }

          return addY
        }
        
        
        else {
            return function(y){
        return x+y;
        }
       
       }

    }
    
  
 //
}

addTogether(5)(7);
