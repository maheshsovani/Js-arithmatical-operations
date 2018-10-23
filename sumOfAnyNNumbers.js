let startingNumber =+process.argv[2];
let endingNumber = +process.argv[3];
let sum=0;
for (let index=startingNumber;index<=endingNumber;index++){
  sum=sum+index;
}
console.log("sum of numbers",startingNumber,"to",endingNumber,"is",sum);
