let endingNumber =+process.argv[2];
console.log("series of odd numbers is");
let index=1;
let oddNumber = 0;
while(index <= endingNumber){
  oddNumber=index;
  console.log(oddNumber);
  index=index+2;
}
