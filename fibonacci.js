let numberOfTerms= +process.argv[2];
let firstTerm = 0;
console.log("fibonacci_series_is");
console.log(firstTerm);
let lastSecond = 1;
let previousNumber = 0;
let currentNumber = 0;
let indexNumber = 1;
while (indexNumber<numberOfTerms){
  currentNumber = lastSecond + previousNumber;
  lastSecond = previousNumber;
  previousNumber = currentNumber;
  console.log(currentNumber);
  indexNumber=indexNumber+1;
}
