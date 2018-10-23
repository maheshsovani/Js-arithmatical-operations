let number = +process.argv[2];
let tableLength = +process.argv[3];
let table=0;
console.log("multiplication table is as follows");
for (let indexNumber=1;indexNumber<=tableLength;indexNumber++){
  table=number*indexNumber;
  console.log(number+" X "+indexNumber+" =",table);
}
