


const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  console.log(s.pop());
  console.log(s.unshift(2));

  // Only change code above this line
}
editInPlace();

console.log(s);