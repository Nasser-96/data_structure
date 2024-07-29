"use client";
import { addUpTo, addUpTo2 } from "@/algorithms-&-data-structures/1-big-o";
import {
  charCount,
  charCountUsingCode,
  refactorCharCount,
} from "@/algorithms-&-data-structures/2-problem-solving";
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

  return (
    <>
      <div className="h-full bg-slate-900 w-full p-10">
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => addUpFun(100000000)}>Add Up</Button>
          <Button onClick={() => returnCharCount()}>Count</Button>
        </div>
      </div>
    </>
  );
}
