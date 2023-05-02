
/**using recursion to exponent  */
function power(x, exponent){
    return exponent === 1 ? 1 : x*x; power(x, exponent-1);
}

console.log(power(5,5));