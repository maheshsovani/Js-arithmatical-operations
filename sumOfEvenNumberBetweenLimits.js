let startingNumber = +process.argv[2];
let endingNumber = +process.argv[3];
if (startingNumber %2 != 0){
  startingNumber-=1;
}
let index= startingNumber;
let evenNumber=0;
while(index<=endingNumber){
  if(index%2==0){
    evenNumber+=index;
  }
  index++;
}
console.log("addition of even numbers is",evenNumber);

