export function addUpTo(n: number): number {
  let total: number = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

export function addUpTo2(n: number) {
  return (n * (n + 1)) / 2;
}
