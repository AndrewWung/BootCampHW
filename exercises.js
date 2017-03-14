//Do not change any of the function names

function multiplyByTen(num) {
  var number=num*10;
  return number;
  //code here
}

function subtractFive(num) {
  return num-5;
  //code here
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  if (str1.length==str2.length) {
    return true;
  }
  else
  return false;

  //otherwise return false
  //code here
}

function areEqual(x, y) {
  //return true if x and y are the same
  if (x==y) {
    return true;
  }
  else
    return false;
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  if (num<90) {
    return true;
  }
  else
    return false;
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  if (num > 50) {
    return true;
  }
  else
    return false;
  //otherwise return false
  //code here
}

function add(x, y) {
  //add x and y together and return the value
  return x+y;
  //code here
}

function subtract(x, y) {
  //subtract y from x and return the value
  return x-y;
  //code here
}

function divide(x, y) {
  //divide x by y and return the value
  return x/y;
  //code here
}

function multiply(x, y) {
  //multiply x by y and return the value
  return x*y;
  //code here
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  return x%y;
  //code here
}

function isEven(num) {
  //return true if num is even
  if (num%2==0) {
    return true;
  }
  else
    return false;
  //otherwise return false
  //code here
}

function isOdd(num) {
  if (num%2!==0) {
    return true;
  }
  else
    return false;
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
  return Math.pow(num,2);
  //square num and return the new value
  //code here
}

function cube(num) {
  return Math.pow(num,3);
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
  return Math.pow(num,exponent);
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
  return Math.round(num);
  //round num and return it
  //code here
}

function roundUp(num) {
  return Math.ceil(num);
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'

 return str+'!';
  //code here
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
return firstName+ ' ' +lastName;
  //code here
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  return 'Hello '+name+'!';
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  return length*width;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  return 0.5*base*height;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  return Math.round(Math.PI*Math.pow(radius,2));
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  return length*width*height;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
