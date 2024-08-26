// first solution
export const isSameSquared = (first: number[], second: number[]) => {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    let correctIndex = second.indexOf(first[i] ** 2); // indexOf consider as a loop because it is iterating inside the array to find the index
    if (correctIndex === -1) {
      return false;
    }
    second.splice(correctIndex, 1);
  }
  return true;
};

// First Note here is the two loops are better than nested loops ( O(n)2 )

// second solution
export function isSameSquaredSecond(first: number[], second: number[]) {
  console.log(first.length);
  console.log(second.length);

  if (first.length !== second.length) {
    return false;
  }
  // first = [1, 2, 4, 4];
  // second  = [4, 1, 16, 16];
  const frequencyCounter1: { [key: number]: number } = {};
  const frequencyCounter2: { [key: number]: number } = {};

  for (const val of first) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of second) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (const key in frequencyCounter1) {
    if (!(parseInt(key) ** 2 in frequencyCounter2)) {
      // here we check if the (key ** 2 ) already exist on the second array
      return false;
    }
    if (frequencyCounter2[parseInt(key) ** 2] !== frequencyCounter1[key]) {
      // and here we check if the value of the key is equal to the first object
      return false;
    }
    // the first and second object are created on the first and second loop inside this function
    // the final object for these two array is :
    // first = {'1':1 , '2':1 , '4':2} '4':2 here it means that number 4 is exist two times on the array
    // second = {'4':1 , '1':1 , '16':2} same here '16':2 here it means that number 16 is exist two times on the array

    // based on the example that given:
    // first condition here check if the ( 4 ** 2 ) is exist on the second object which is 16 and yes we found it !! NOTE we are checking for key
    // second condition is to check if the ( 4 ** 2 ) value is the same on the same object which is 2 and yes we found it !! NOTE we are checking for value
  }
  return true;
}
// O(n)

export function isSameAnagrams(first: string, second: string) {
  if (first.length !== second.length) {
    return false;
  }
  const frequencyCounter1: { [key: string]: number } = {};
  const frequencyCounter2: { [key: string]: number } = {};

  for (const val of first) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of second) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

export function isSameAnagramsAnotherSolution(first: string, second: string) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup: { [key: string]: number } = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
