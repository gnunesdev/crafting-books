function exercise(sumArray: number[]): number {
  if (sumArray.length === 0) return 0;

  return 1 + exercise(sumArray.slice(1));
}

console.log(exercise([1, 2, 3, 4]));
