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

// ==================================================================
// MULTIPLE POINTERS PATTERN
// Naive Solution which going to take a lot of time
// this is O(n)2
export function sumZero(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}

// Better solution
// and this is O(n)
export function sumZeroBetter(array: number[]) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// this not the better solution but it is a solution
// O(n)2
export function countUniqueValue(array: number[]) {
  const newArray: number[] = [];
  array.forEach((number: number) => {
    const indexInNewArray = newArray.indexOf(number); // this is consider as loop
    if (indexInNewArray === -1) {
      newArray.push(number);
    }
  });
  return newArray.length;
}

export function countUniqueValueBetter(array: number[]) {
  let firstPointer = 0;
  let secondPointer = 1;
  let count = 0;
  while (secondPointer <= array.length) {
    if (array[firstPointer] !== array[secondPointer]) {
      count++;
      firstPointer = secondPointer;
    }
    secondPointer++;
  }
  return count;
}

export function countUniqueValueLessVariables(array: number[]) {
  if (array.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

// ==================================================================
// SLIDING WINDOW PATTERN
// Maximum sum of n consecutive elements in the array
// Naive solution O(n)2
export function maxSubArraySum(array: number[], number: number) {
  if (number > array.length) {
    return null;
  }
  // we choose -Infinity because the numbers can be negative so if we choose 0 it will not help
  let max = -Infinity;
  for (let i = 0; i < array.length - number + 1; i++) {
    let temp = 0;
    for (let j = 0; j < number; j++) {
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

export function maxSubArraySumBetter(array: number[], number: number) {
  if (array.length < number) return null;
  let maxSub = 0;
  let tempSub = 0;

  for (let i = 0; i < number; i++) {
    maxSub += array[i];
  }
  tempSub = maxSub;
  for (let i = number; i < array.length; i++) {
    // what we do here is we subtract the first number on the sum and added the last one EX: [1, 2, 5, 8, 1, 5] let say we already have the sum of the 1,2,5 which is 8, so if we want to know the next three (the number that passed to this function) all we need is to subtract 1 (first number added on the three numbers) and add the 8 (new number) which is become the third number
    tempSub = tempSub - array[i - number] + array[i];
    maxSub = Math.max(maxSub, tempSub);
  }
  return maxSub;
}

// ==================================================================
// DIVIDE AND CONQUER PATTERN
// Naive Solution
export function searchForNumber(array: number[], value: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// Better solution
export function searchForNumberBetter(array: number[], value: number) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (array[middle] < value) {
      min = middle + 1;
    } else if (array[middle] > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
