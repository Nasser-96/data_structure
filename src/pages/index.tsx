"use client";
import { addUpTo, addUpTo2 } from "@/algorithms-&-data-structures/big-o";
import Button from "@/components/button";

export default function Home() {
  const addUpFun = () => {
    addUpFirst();
    addUpSecond();
  };

  const addUpFirst = () => {
    const time1 = performance.now();
    addUpTo(100000);
    const time2 = performance.now();
    console.log("addUpTo", (time2 - time1) / 1000);
  };

  const addUpSecond = () => {
    const time1 = performance.now();
    addUpTo2(100000);
    const time2 = performance.now();
    console.log("addUpTo2", (time2 - time1) / 1000);
  };

  return (
    <>
      <div className="h-full bg-slate-900 w-full p-10">
        <Button onClick={() => addUpFun()}>Add Up</Button>
      </div>
    </>
  );
}
