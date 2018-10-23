let endingNumber = +process.argv[2];
let oddNumber;
console.log("series of odd numbers is");
if(endingNumber %2 == 0){
  endingNumber--;
}
let index=endingNumber;
while(index > 0){
  oddNumber = index;
  console.log(oddNumber);
  index=index-2;
}
