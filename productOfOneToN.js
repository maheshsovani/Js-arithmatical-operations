let givenNumber=+process.argv[2];
let answer=1;
for (let index=1;index<=givenNumber;index++){
  answer=answer*index;
}
console.log("The product of numbers upto",givenNumber,"is",answer);
