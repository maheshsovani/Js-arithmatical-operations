let endingNumber =+process.argv[2];
let evenNumber = 0;
console.log("series of even numbers is");
let counter=0;
while(counter<=endingNumber){
  evenNumber=counter;
  console.log(evenNumber);
  counter=counter+2;
}

