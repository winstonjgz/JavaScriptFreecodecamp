function unidadRC(x){
  var unidad;
  //x=x.toString();
  //console.log("El numero a evaluar es: "+unidadR);
  switch (x){
    case 1:
      unidad="I";
      break;
    case 2:
      unidad="II";
      break;
    case 3:
      unidad="III";
      break;
     case 4:
      unidad="IV";
      break;
    case 5:
      unidad="V";
      break;
    case 6:
      unidad="VI";
      break;
    case 7:
      unidad="VII";
      break;
    case 8:
      unidad="VIII";
      break;
    case 9:
      unidad="IX";
      break;
    case 0:
      unidad="";
      break;
  }
  console.log(unidad)
  return (unidad);
  
}


function decenaRC(x){
  var unidad;
  //x=x.toString();
  //console.log("El numero a evaluar es: "+unidadR);
  switch (x){
    case 1:
      unidad="X";
      break;
    case 2:
      unidad="XX";
      break;
    case 3:
      unidad="XXX";
      break;
     case 4:
      unidad="XL";
      break;
    case 5:
      unidad="L";
      break;
    case 6:
      unidad="LX";
      break;
    case 7:
      unidad="LXX";
      break;
    case 8:
      unidad="LXXX";
      break;
    case 9:
      unidad="XC";
      break;
    case 0:
      unidad="";
      break;
  }
  //console.log(unidad)
  return (unidad);
  
}

function centenaRC(x){
  var unidad;
  //x=x.toString();
  //console.log("El numero a evaluar es: "+unidadR);
  switch (x){
    case 1:
      unidad="C";
      break;
    case 2:
      unidad="CC";
      break;
    case 3:
      unidad="CCC";
      break;
     case 4:
      unidad="CD";
      break;
    case 5:
      unidad="D";
      break;
    case 6:
      unidad="DC";
      break;
    case 7:
      unidad="DCC";
      break;
    case 8:
      unidad="DCCC";
      break;
    case 9:
      unidad="CM";
      break;
    case 0:
      unidad="";
      break;
  }
  //console.log(unidad)
  return (unidad);
  
}


function milesRC(x){
  var unidad;
  //x=x.toString();
  //console.log("El numero a evaluar es: "+unidadR);
  switch (x){
    case 1:
      unidad="M";
      break;
    case 2:
      unidad="MM";
      break;
    case 3:
      unidad="MMM";
      break;
     
    case 0:
      unidad="";
      break;
  }
  console.log(unidad)
  return (unidad);
  
}

function convertToRoman(num) {
let mil     = "";
let centena = "";
let decena  = "";
let miles  = ""

let lNum = num.toString();
let leNum = lNum.length;
let compNum = lNum.split("")
let Romano  = "";
//console.log(lNum)
console.log(leNum);

let mile=0;

//for (let i =0; i < leNum; i++){};

var unidadRom="";
var decenaRom="";
var centenaRom="";
var milesRom="";
let unidadR="";
let decenaR="";
let centenaR="";
let milesR="";

  //console.log(compNum)

  switch (leNum) {
    
    case 1:
      //console.log("La unidad es: "+compNum[0]);
      unidadR=parseInt(compNum[0]);
      //console.log(unidadR)
      //console.log(unidadRC(unidadR));
      Romano = unidadRC(unidadR);
      
      break;

    case 2:
      //console.log("La unidad es: "+compNum[1]);
      //console.log("La decena es: "+compNum[0]);
      unidadR=parseInt(compNum[1]);
      decenaR=parseInt(compNum[0]);
      unidadRom = unidadRC(unidadR);
      decenaRom = decenaRC(decenaR);
      Romano = decenaRom+unidadRom

      break;

    case 3:
      //console.log("La unidad es: "+compNum[2]);
      //console.log("La decena es: "+compNum[1]);
      //console.log("La centena es: "+compNum[0]);
      unidadR=parseInt(compNum[2]);
      decenaR=parseInt(compNum[1]);
      centenaR=parseInt(compNum[0]);
      unidadRom = unidadRC(unidadR);
      decenaRom = decenaRC(decenaR);
      centenaRom = centenaRC(centenaR);
      Romano = centenaRom+decenaRom+unidadRom

      break;

    case 4:
      console.log("La unidad es: "+compNum[3]);
      console.log("La decena es: "+compNum[2]);
      console.log("La centena es: "+compNum[1]);
      console.log("La unidad de mil es: "+compNum[0]);
      unidadR=parseInt(compNum[3]);
      decenaR=parseInt(compNum[2]);
      centenaR=parseInt(compNum[1]);
      milesR=parseInt(compNum[0]);
      unidadRom = unidadRC(unidadR);
      decenaRom = decenaRC(decenaR);
      centenaRom = centenaRC(centenaR);
      milesRom = milesRC(milesR);
      Romano = milesRom+centenaRom+decenaRom+unidadRom
      break;
  
  }
  //console.log(unidadRom)
  return (Romano);

}


//unidadRC(2)
convertToRoman(1023);
convertToRoman(2014);
////convertToRoman(1536);
//convertToRoman(2000);
