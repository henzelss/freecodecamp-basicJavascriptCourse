function rangeOfNumbers(startNum, endNum) {
    return startNum > endNum ? [] 
        : startNum === endNum ? [startNum] :
         [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
}
console.log(rangeOfNumbers(1, 5));
