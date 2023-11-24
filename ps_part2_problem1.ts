function fiboTopDown(n: number): number {
  // your code here
  let memo: Array<number> = [];

  for (let i: number = 0; i <= n; i++) {
    if (i <= 1) {
      memo[i] = i;
    } else {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
  }

  return memo[n];
}

console.log(fiboTopDown(0));
console.log(fiboTopDown(1));
console.log(fiboTopDown(2));
console.log(fiboTopDown(3));
console.log(fiboTopDown(5));
console.log(fiboTopDown(6));
console.log(fiboTopDown(7));
console.log(fiboTopDown(9));
console.log(fiboTopDown(10));
