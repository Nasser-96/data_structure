// Big O : it allows us to talk formally about how the run time of an algorithm grows as the inputs grow

// the number of operation is important EX: (+, *,/,...etc)

export function addUpTo(n: number): number {
  // O(n)
  let total: number = 0;
  for (let i = 1; i <= n; i++) {
    // here we multiple operations, i++ is going to happen depend on the number of the loop going to happen
    total += i; // here the operation that going to happen depend on n, if n = 5 then 5 operations if n = 1000 then 1000 operation
  }
  return total;
  // conclusion here is the operation numbers depend on the n but on addUpTo2 it is always going to be 3
}

export function addUpTo2(n: number) {
  // O(1)
  return (n * (n + 1)) / 2; // here we only have 3 operations which is *,+ and / no matter of n it is always going to be 3
}

// we should know the difference between O(n) space and O(n) time

//O(n) space: the memory that going to be used during any operation
//O(n) time: the time that going to take during any operation

//  index                   0        1       2
const names: string[] = ["Nasser", "Ali", "Ahmed"]; // each name has his own index so when we know the index it is going to be O(1)

// when we push new element into array let's say it is Khaled we add it to the last of the array so it's index going to be 3 so it's going to be O(1)
// HOWEVER if we add Khaled to the beginning of the array it is going to O(n), why ? because when we add to the beginning of the array it is going to change the rest of the array index
// also when we delete element from the array is the same, delete the last element O(1) delete the first one is O(n)
// so we should try to avoid add and delete from the first of the array
