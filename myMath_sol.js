import { getTriangleArea } from './myMathModule';

const getTriangleSquare = (n) => {
  return getTriangleArea(n, square(n) / 2);
}
export default getTriangleSquare;