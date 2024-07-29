// 1- UNDERSTAND THE PROBLEM:
{
  // 1 - Can I restate the problem in my own words ? DO NOT repeat the same word
  // 2 - What are the inputs that go into the Problem?
  // 3 - What are the outputs that should come from the solution to the problem ? it can be phrase as what the function should return
  // 4 - Can the outputs be determined from the inputs ? in other words, do i have enough information to solve the problem ? (You may not be able to answer this question until you set about solving the problem. that's okay; it's still worth considering the question at this early stage.)
  // 5 - How should i label the important pieces of the data tha are a part of the problem?
}

// ==================================================================
// EX: write a function which takes two numbers and returns their sum.
// ==================================================================
// 1. Can I restate the problem in my own words ? DO NOT repeat the same word?
//      implement addition
// 2. What are the inputs that go into the Problem?
//      - ints?
//      - floats?
//      - what about string for large number?
// 3. What are the outputs that should come from the solution to the problem ?
//      - int? float? string?
// 4. Can the outputs be determined from the inputs ? in other words, do i have enough information to solve the problem ? (You may not be able to answer this question until you set about solving the problem. that's okay; it's still worth considering the question at this early stage.)
// 5. How should i label the important pieces of the data tha are a part of the problem?

// 2- EXPLORE EXAMPLES:
{
  // - Start with simple Examples
  // - Progress to More Complex Examples
  // - Explore more Examples with Empty Inputs
  // - Explore Examples with Invalid Inputs
}

// 3- BREAK IT DOWN:
// EX: Build function that take string and return the count of each char on this string
export function charCount(str: string) {
  // make object to return at end
  const result: { [key: string]: number } = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    const regex = /[a-z]/i;
    const char = str[i].toLowerCase();
    const isNumOrStr: boolean =
      !Number.isNaN(parseInt(char)) || regex.test(char);
    // if character is something else (space, period, etc) don't do anything
    if (isNumOrStr) {
      // if the char is a number/letter AND is a key in object, add one to count
      if (result[char] > 0) {
        result[char]++;
      }
      // if the char is a number/letter AND not in object, add it to the object and set value to 1
      else {
        result[char] = 1;
      }
    }
  }
  // return object at the end
  return result;
}

// 4- Solve OR Simplify

// 5- LOOK BACK AND REFACTOR

export function refactorCharCount(str: string) {
  var obj: any = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// BETTER One and faster
export function charCountUsingCode(str: string) {
  var obj: any = {};
  var code;
  for (var char of str) {
    char = char.toLowerCase();
    code = char.charCodeAt(0); // always going to be 0 because it is only one char
    if (
      (code > 47 && code < 58) || // codes for numeric string ( 0 - 9 )
      (code > 64 && code < 91) || // upper alpha ( A - Z )
      (code > 96 && code < 123) // lower alpha ( a - z )
    ) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
// Conclusion for this example using codes of the string is always faster than regex >_<

/**
 
 * (code > 47 && code < 58)   // codes for numeric string ( 0 - 9 )
 * (code > 64 && code < 91)   // upper alpha ( A - Z )
 * (code > 96 && code < 123)  // lower alpha ( a - z )
 
 **/
