let givenNumber=+process.argv[2];
let answer=1;
for (let indexNumber=1;indexNumber<=givenNumber;indexNumber++){
  answer=answer*indexNumber;
}
console.log("The factorindexNumberal of", givenNumber ,"indexNumbers", answer);
