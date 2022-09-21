function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const G = 0.0000000000667
  const earthRadius = 6367.4447;
  const pi = 3.1416;
  let arr1={};
  let nArr = [];
  let orbitalPeriod2=[]

for (let elem in arr){
    let avgAlt1 = arr.map(({name: nm, avgAlt: avgL}) => ({nm, avgL}) ) ;
    console.log(avgAlt1);
    
    var avgAlt2 = avgAlt1.reduce((avgL) => avgL) 
    
    let avgL1=avgAlt2.avgL;
    
    console.log(avgL1)
    let alpha= earthRadius+avgL1;
    
    let orbitalPeriod1= Math.round(2*Math.PI*(Math.sqrt(Math.pow((earthRadius+arr[elem].avgAlt),3)/(GM))));
        ;
        orbitalPeriod2.push(orbitalPeriod1)
        
        arr1.name=arr[elem].name;
        arr1.orbitalPeriod = orbitalPeriod2[elem] ;
        nArr.push({name: arr1.name, orbitalPeriod: arr1.orbitalPeriod})
  }  

    console.log(nArr)

  return nArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])