export const add = (a: number, b: number) => {
  return a + b;
};

export const sqrt = (a: number, b: number) => {
  const squarSum = add(a * a, b * b);
  return Math.sqrt(squarSum);
};
