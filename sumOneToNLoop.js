let startingNumber = +process.argv[2];
let addition=0;
for (let index=1; index<=startingNumber; index++){
  addition = addition+index;
}
console.log("addition of first" ,startingNumber,"numbers is",addition);
