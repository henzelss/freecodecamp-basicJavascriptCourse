

function sumRange (n){
    if(n < 1){
        return 0;
    }else{
        let sum = sumRange(n-1);
        return sum + n;
    }

}

console.log(sumRange(5));