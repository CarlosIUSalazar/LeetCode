var isPalindrome = function(x) {
  
  let y = parseFloat(x.toString().split('').reverse().join(''));
  
  if (x === y){
      return true;
  } else {
      return false;
  }
};

console.log(isPalindrome(121))


////

var reverse = function(x) {
  const min = Math.pow(2, 31) * -1;
  const max = Math.pow(2, 31) - 1;
  // x >= Math.pow(-2,31) || x <= Math.pow(2-1,31) ? x : 0; 
  let y = (
    parseFloat(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(x)
  )   
  if (y < min || y > max){
    return 0
  } else {
    return y;
  }
  
  };

console.log(reverse(-24654));