let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
let greatestNumber = firstNumber;
let lcm = 0;
let gcd=0;
if (secondNumber>greatestNumber){
  greatestNumber=secondNumber;
}
for(let indexNumber=1;indexNumber<=greatestNumber;indexNumber++){
  if (firstNumber % indexNumber ==0 && secondNumber % indexNumber ==0){
    gcd=indexNumber;
  }
}
lcm=(firstNumber*secondNumber)/gcd ;
console.log("LCM of given numbers is ",lcm);
