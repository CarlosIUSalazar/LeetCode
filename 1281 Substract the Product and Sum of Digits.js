
//https://stackoverflow.com/questions/3638074/adding-two-numbers-in-javascript-incorrectly
// 1281. Subtract the Product and Sum of Digits of an Integer
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function(n) {
    
  let digitArray = n.toString().split('');
  let product = digitArray.reduce((acc,val) => acc * val);
  let sum = digitArray.reduce((acc,val) => parseInt(acc) + parseInt(val)); //parseInt was needed as + was actualy joining the digits together not adding them
  console.log(digitArray);
  console.log(product);
  console.log(sum);
  return (product - sum);


};

console.log(subtractProductAndSum(1234))