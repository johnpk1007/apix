"use client";

import { useContext } from "react";
import { Context } from "./provider";
import { BillboardSkeletonText } from "./skeleton";

export const BillboardWeek = () => {
  const { billboardWeek, setBillboardWeek } = useContext(Context);
  console.log("billboardWeek.length:", billboardWeek.length);
  return (
    <div className="flex flex-col justify-center items-end mr-3">
      <div className="font-poppins font-black text-2xl">Billboard Hot 100</div>
      {billboardWeek !== "" ? (
        <div className="font-poppins font-semibold text-3xl">
          {billboardWeek}
        </div>
      ) : (
        <BillboardSkeletonText width={250} height={20} />
      )}
    </div>
  );
};
