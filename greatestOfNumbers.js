let firstNumber=+process.argv[2];
let secondNumber=+process.argv[3];
let thirdNumber=process.argv[4];
let greatestNumber=firstNumber;
if (secondNumber > greatestNumber){
  greatestNumber=secondNumber;
}
if (thirdNumber > greatestNumber){
  greatestNumber=thirdNumber;
}
console.log("The largest of given three numbers is ",greatestNumber);

