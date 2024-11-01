// Higher Order Functions =>  A function that takes another function(s) as an argument(s) and/or returns a function as a value.

// Callback functions => A function that is passed to another function.

// Higher order function example :-
function copyArray(arr, instrction) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(instrction(arr[i]));
    }
    return output;
}

// callback function :-
function multiplatyBy2(input) {
    return input * 2;
}

const numArr = [1, 2, 3];

let result = copyArray(numArr, multiplatyBy2);
console.log(result);