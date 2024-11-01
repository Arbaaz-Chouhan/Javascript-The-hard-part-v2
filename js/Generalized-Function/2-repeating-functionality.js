// Repeating functionality =>

function copyArrayMultiplayBy2(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] * 2); //  that's the repeating functionality the for loop running again n again and multiply value;   
    }
    return output;
}

const myArray = [1, 2, 3];
const result = copyArrayMultiplayBy2(myArray);
console.log(result);   // [2,4,6];