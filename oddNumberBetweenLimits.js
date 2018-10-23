let startingNumber = +process.argv[2];
let endingNumber = +process.argv[3];
console.log("series of odd numbers is");
let oddNumber=0;
if(startingNumber%2 != 0){
  startingNumber-=1;
}
let index= startingNumber;
while(index < endingNumber){
  oddNumber=index; 
  console.log(oddNumber+1);
  index = index+2;
}

