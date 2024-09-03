"use client";
import { addUpTo, addUpTo2 } from "@/algorithms-&-data-structures/1-big-o";
import {
  charCount,
  charCountUsingCode,
  refactorCharCount,
} from "@/algorithms-&-data-structures/2-problem-solving";
import {
  countUniqueValue,
  countUniqueValueBetter,
  countUniqueValueLessVariables,
  isSameAnagrams,
  isSameAnagramsAnotherSolution,
  isSameSquared,
  isSameSquaredSecond,
  maxSubArraySum,
  maxSubArraySumBetter,
  sumZero,
  sumZeroBetter,
} from "@/algorithms-&-data-structures/3-problem-solving-patterns";
import Button from "@/components/button";

export default function Home() {
  const addUpFun = (number: number) => {
    addUpFirst(number);
    addUpSecond(number);
  };

  const measureTime = (fn: () => any, label: string) => {
    const startTime = performance.now();
    console.log(fn());
    const endTime = performance.now();
    console.log((endTime - startTime) / 1000, label);
  };

  const addUpFirst = (number: number) => {
    measureTime(() => addUpTo(number), "addUpTo");
  };

  const addUpSecond = (number: number) => {
    measureTime(() => addUpTo2(number), "addUpTo");
  };

  const returnCharCount = () => {
    const count = charCount("nasser2_-+=.,?");
    const countRefactor = refactorCharCount("nasser2_-+=.,?");
    const countUsingCode = charCountUsingCode("nasser2_-+=.,?");
    console.log("charCount", count);
    console.log("refactorCharCount", countRefactor);
    console.log("countUsingCode", countUsingCode);
    console.log("testChar", "Z".charCodeAt(0));
  };

  const sameSquare = () => {
    const arrayLength = 40000;
    const firstArr = multiplyArray(arrayLength, [1, 2, 4, 4]);
    const secondArr = multiplyArray(arrayLength, [4, 1, 16, 16]);

    measureTime(
      () => isSameSquared([...firstArr], [...secondArr]),
      "isSameSquared"
    );
    measureTime(
      () => isSameSquaredSecond([...firstArr], [...secondArr]),
      "isSameSquaredSecond"
    );
  };

  const multiplyArray = (number: number, array: number[]) => {
    const multipliedArray = Array(array.length * number)
      .fill("")
      .map((_, i) => array[i % array.length]);
    return multipliedArray;
  };

  const anagrams = () => {
    const repeatTime = 10000000;
    const firstString = "aap".repeat(repeatTime);
    const secondString = "paa".repeat(repeatTime);
    measureTime(
      () => isSameAnagrams(firstString, secondString),
      "isSameAnagrams"
    );
    measureTime(
      () => isSameAnagramsAnotherSolution(firstString, secondString),
      "isSameAnagramsAnotherSolution"
    );
    // both solution almost same
  };

  const multiplePointersPattern = () => {
    const sortedArray = [-4, -3, -2, -1, 0, 1, 2, 5];

    measureTime(() => {
      return sumZero(sortedArray);
    }, "sumZero");

    measureTime(() => {
      return sumZeroBetter(sortedArray);
    }, "sumZeroBetter");
  };

  const uniqueValue = () => {
    const sortedArray: number[] = [];
    measureTime(() => {
      return countUniqueValue(sortedArray);
    }, "countUniqueValue");

    measureTime(() => {
      return countUniqueValueBetter(sortedArray);
    }, "countUniqueValueBetter");

    measureTime(() => {
      return countUniqueValueLessVariables(sortedArray);
    }, "countUniqueValueLessVariables");
  };

  const maxSubArray = () => {
    const array = [1, 2, 5, 8, 1, 5];
    const multipliedArray = Array(array.length * 1000000)
      .fill("")
      .map((_, i) => array[i % array.length]);
    measureTime(() => {
      return maxSubArraySum(multipliedArray, 10000000);
    }, "maxSubArraySum");
    measureTime(() => {
      return maxSubArraySumBetter(multipliedArray, 10000000);
    }, "maxSubArraySumBetter");
  };

  return (
    <>
      <div className="h-full bg-slate-900 w-full p-10">
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => addUpFun(100000000)}>Add Up</Button>
          <Button onClick={() => returnCharCount()}>Count</Button>
          <Button onClick={() => sameSquare()}>Same Square</Button>
          <Button onClick={() => anagrams()}>Anagrams</Button>
          <Button onClick={() => multiplePointersPattern()}>
            Multi Pointer
          </Button>
          <Button onClick={() => uniqueValue()}>Unique Value</Button>
          <Button onClick={() => maxSubArray()}>Max Sub Array </Button>
        </div>
      </div>
    </>
  );
}
