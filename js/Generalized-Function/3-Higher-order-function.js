// jab koi function kisi dusray function ko as a argument lata hay or us ko as a result return kerta hay Higher order function khlata hay


function applyOperation(num,operation){
    return operation(num);

}

function multiply(x){
    return x*x;
}


function addition(x){
    return x + x;
}


console.log(applyOperation(5,multiply)); // 25
console.log(applyOperation(5,addition)); // 10

