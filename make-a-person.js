const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName1=firstAndLast;
  let fullName=firstAndLast.split(" ");
  console.log(fullName);

  this.getFullName = function() {
    return fullName1;
  };
  this.getLastName = function() {
    fullName1=fullName1.split(" ")
    return fullName1[1];
  };
  this.getFirstName = function() {
    fullName1=fullName1.split(" ")
    return fullName1[0];
  };
  this.setFirstName = function(firstName) {
    fullName[0]=firstName
      fullName1=fullName.join(" ")
      console.log(fullName.join(" "))
    return fullName1;
  };
  this.setLastName = function(lastName ) {
      fullName[1]=lastName
      fullName1=fullName.join(" ")
      console.log(fullName.join(" "))
    return fullName1;
  };
  this.setFullName = function(setFullName) {
      fullName1=setFullName;
      fullName = fullName1;
    return fullName;
  };





  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
bob.setLastName("Curry")