let startingNumber = +process.argv[2];
let endingNumber = +process.argv[3];
let multiply=1;
for (let index=startingNumber;index<=endingNumber;index++){
  multiply=multiply*index;
}
console.log("multiplication of natural numbers is ",multiply);

