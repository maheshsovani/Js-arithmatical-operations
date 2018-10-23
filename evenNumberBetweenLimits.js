let number1 = +process.argv[2];
let number2 = +process.argv[3];
let evenNumber = 0;
console.log("series of even numbers is");
for (let index=number1;index<=number2;index++){
  if (index%2==0){
    console.log(index);
  }
}

