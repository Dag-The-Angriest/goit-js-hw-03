function filterArray(numbers, value) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= value) {
      arr = arr;
    } else arr.push(numbers[i]);
  }
  return arr;
  // return arr;
  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = 0; j < numbers.length; j++) {
  //     return
  //   }
  // }
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
