let startingNumber = +process.argv[2];
let endingNumber = +process.argv[3];
let nthTerm= +process.argv[4];
let specificNumber=0;
console.log("series of specific numbers is");
let index= startingNumber;
while(index <= endingNumber){
  specificNumber=index;
  console.log(specificNumber);
  index=index + nthTerm;
}
