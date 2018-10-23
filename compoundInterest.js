let principleAmount = process.argv[2];
let rateOfInterest = process.argv[3];
let period = process.argv[4];
let compoundInterest=0;
let amount=0;
amount=principleAmount*(Math.pow((1+(rateOfInterest/100)),period));
compoundInterest=(amount-principleAmount);
console.log("CompoundInterest is ",Math.floor(compoundInterest));
