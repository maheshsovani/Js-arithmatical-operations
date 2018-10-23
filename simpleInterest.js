let principleAmount = +process.argv[2];
let rateOfInterest = +process.argv[3];
let period = +process.argv[4];
let simpleInterest =0;
simpleInterest= ((principleAmount*rateOfInterest*period)/100);
console.log("Simple interest is" ,simpleInterest);
