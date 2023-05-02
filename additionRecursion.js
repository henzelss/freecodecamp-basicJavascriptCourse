
//function using recursion which takes the sum of all numbers from 1
function sumRange (n){
    return n < 1 ? 0 : n + sumRange(n-1);
}

console.log(sumRange(5));