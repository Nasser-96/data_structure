// the number of operation is important EX: (+, *,/,...etc)

export function addUpTo(n: number): number {
  let total: number = 0;
  for (let i = 1; i <= n; i++) {
    // here we multiple operations, i++ is going to happen depend on the number of the loop going to happen
    total += i; // here the operation that going to happen depend on n, if n = 5 then 5 operations if n = 1000 then 1000 operation
  }
  return total;
  // conclusion here is the operation numbers depend on the n but on addUpTo2 it is always going to be 3
}

export function addUpTo2(n: number) {
  return (n * (n + 1)) / 2; // here we only have 3 operations which is *,+ and / no matter of n it is always going to be 3
}
