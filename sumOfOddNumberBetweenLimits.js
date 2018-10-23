let startingNumber = +process.argv[2];
let endingNumber = +process.argv[3];
if(startingNumber %2 == 0){
  startingNumber-=1;
}
let index= startingNumber;
let oddNumberSum = 0;
while(index<=endingNumber){
  oddNumberSum=oddNumberSum+index;
  index=index+2;
}
console.log("sum of odd numbers of given series is",oddNumberSum);
