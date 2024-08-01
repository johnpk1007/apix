"use client";

import { useContext } from "react";
import { Context } from "./provider";
import { BillboardSkeletonText } from "./skeleton";

export const BillboardWeek = ({ billboardWeek }) => {
  return (
    <div className="flex flex-col xxs:absolute md:relative xxs:bottom-7 sm:bottom-4 xxs:right-0 justify-centeritems-end mr-3">
      <div className="font-poppins font-black xxs:text-sm md:text-md lg:text-base xl:text-lg text-right xxs:text-white md:text-black">
        Billboard Hot 100
      </div>
      {billboardWeek !== "" ? (
        <div className="font-poppins font-semibold xxs:text-sm md:text-md lg:text-xl xl:text-2xl text-right xxs:text-white md:text-black">
          {billboardWeek}
        </div>
      ) : (
        <BillboardSkeletonText width={250} height={20} />
      )}
    </div>
  );
};
