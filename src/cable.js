/**
 The cable problem
 Implement algorithm 1 here
*/
function cable1(currentLength , requireLength , saleLength) {
  let count = 0;
  let i = currentLength ;
  while (i < requireLength) {
    i = i + saleLength;
    count++
  }
  return count;
}
/**
 The cable problem
 Implement algorithm 2 here
*/
function cable2(currentLength, requiredLength, saleLength) {
  let distance = requiredLength - currentLength;
  let total = Math.ceil(distance/saleLength);
  return total;
}

module.exports = {
  cable1,
  cable2
};