function telephoneCheck(str) {
  //console.log(str.split(/\s*/));
  //console.log(str.split(/\S*/));
  //console.log(str.split(/\d*/));
  //console.log(str.split(/\D*/));
  //console.log(str.split(/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/));
  //console.log(str[0]);
  console.log((str.split(/\D*/)).length);
  
  var patron = new RegExp(/^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/);

  if (patron.test(str)===true){
    return true;
  }else if((str.split(/\D*/)).length<11){
    return false;
  }else{
    return false;
  }
  

}


telephoneCheck("1 555)555-5555")