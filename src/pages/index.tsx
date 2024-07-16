"use client";
import { addUpTo, addUpTo2 } from "@/algorithms-&-data-structures/big-o";
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

  return (
    <>
      <div className="h-full bg-slate-900 w-full p-10">
        <Button onClick={() => addUpFun(10000000000)}>Add Up</Button>
      </div>
    </>
  );
}
