let firstNumber=+process.argv[2];
let secondNumber = +process.argv[3];
let greatestNumber = firstNumber;
let gcd = 0 ;

if (secondNumber>greatestNumber){
  greatestNumber=secondNumber;
}
for ( let indexNumber=1;indexNumber<=greatestNumber;indexNumber++){
  if (firstNumber % indexNumber==0 && secondNumber % indexNumber==0){
    gcd=indexNumber;
  }
}
console.log("GCD of numbers is ",gcd);
