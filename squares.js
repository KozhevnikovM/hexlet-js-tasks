const square = (n) => {
  return n*n;
};
const sumOfSquares = (a, b) => {
  return square(a) + square (b);
};
const squareSumOfSquares = (c, d) => {
  return square(sumOfSquares(c,d));
}