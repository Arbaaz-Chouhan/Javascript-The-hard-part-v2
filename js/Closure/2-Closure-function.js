// Closure Function => 

function createfunction() {
    function multiplatyBy2(num) {   // paas the perameter in num = 3
        return num * 2             // num is 3 and multiply 3 * 2 = 6
    }

    return multiplatyBy2;
}

const genratedFun = createfunction();
const result = genratedFun(3)  // 6
console.log(result)  // 3 * 2 =  6 