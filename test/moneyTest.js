import { formatCurrency } from "../scripts/utils/money.js";

// //////////////////////////////////////////////////
console.log("test suit: formatCurrency ")

console.log("convert cents into doller");
if(formatCurrency(2095)==='20.95'){
  console.log("pass");
}
else{
  console.log("fail")
}

console.log("working with zero")
if(formatCurrency(0)==='0.00'){
  console.log("pass");
}
else{
  console.log("fail")
}

console.log("round up to nearest cents")
if(formatCurrency(2000.5)==='20.01'){
  console.log("pass");
}
else{
  console.log("fail")
}
