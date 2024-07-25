"use client";

import { useContext } from "react";
import { Context } from "./provider";
import { BillboardSkeletonText } from "./skeleton";

export const BillboardWeek = ({ billboardWeek }) => {
  return (
    <div className="flex flex-col justify-center items-end mr-3">
      <div className="font-poppins font-black text-lg">Billboard Hot 100</div>
      {billboardWeek !== "" ? (
        <div className="font-poppins font-semibold text-2xl">
          {billboardWeek}
        </div>
      ) : (
        <BillboardSkeletonText width={250} height={20} />
      )}
    </div>
  );
};
