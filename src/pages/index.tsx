"use client";
import { addUpTo, addUpTo2 } from "@/algorithms-&-data-structures/1-big-o";
import {
  charCount,
  charCountUsingCode,
  refactorCharCount,
} from "@/algorithms-&-data-structures/2-problem-solving";
import {
  isSameAnagrams,
  isSameAnagramsAnotherSolution,
  isSameSquared,
  isSameSquaredSecond,
} from "@/algorithms-&-data-structures/3-problem-solving-patterns";
import Button from "@/components/button";

export default function Home() {
  const addUpFun = (number: number) => {
    addUpFirst(number);
    addUpSecond(number);
  };

  const addUpFirst = (number: number) => {
    const time1 = performance.now();
    addUpTo(number);
    const time2 = performance.now();
    console.log("addUpTo", (time2 - time1) / 1000);
  };

  const addUpSecond = (number: number) => {
    const time1 = performance.now();
    addUpTo2(number);
    const time2 = performance.now();
    console.log("addUpTo2", (time2 - time1) / 1000);
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

    const time1 = performance.now();
    isSameSquared([...firstArr], [...secondArr]);
    const time2 = performance.now();
    isSameSquaredSecond([...firstArr], [...secondArr]);
    const time3 = performance.now();
    console.log("isSameSquared", (time2 - time1) / 1000);
    console.log("isSameSquaredSecond", (time3 - time2) / 1000);
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
    const time1 = performance.now();
    const anagrams = isSameAnagrams(firstString, secondString);
    const time2 = performance.now();
    console.log("isSameAnagrams", (time2 - time1) / 1000);
    const anagramsSecondSolution = isSameAnagramsAnotherSolution(
      firstString,
      secondString
    );
    const time3 = performance.now();
    console.log("isSameAnagramsAnotherSolution", (time3 - time2) / 1000);
    // both solution almost same
  };

  return (
    <>
      <div className="h-full bg-slate-900 w-full p-10">
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => addUpFun(100000000)}>Add Up</Button>
          <Button onClick={() => returnCharCount()}>Count</Button>
          <Button onClick={() => sameSquare()}>Same Square</Button>
          <Button onClick={() => anagrams()}>Anagrams</Button>
        </div>
      </div>
    </>
  );
}
