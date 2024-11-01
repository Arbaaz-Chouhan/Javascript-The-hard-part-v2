// Single Thread Exexution means ur code will do one task at a time;

const num = 3;

function multiplayBy2(inputNumber){
const result = inputNumber * 2;
return result;
}

const output = multiplayBy2(num);
const newOutput = multiplayBy2(10);

console.log(output);   // 6
console.log(newOutput) // 20