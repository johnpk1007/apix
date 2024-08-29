"use client";

import { BillboardSkeletonText } from "./skeleton";

export const BillboardWeek = ({ billboardWeek }) => {
  return (
    <div className="flex flex-col xxs:absolute md:relative xxs:bottom-7 sm:bottom-4 xxs:right-0 justify-center items-end mr-3">
      <div className="font-poppins font-black xxs:text-sm md:text-md lg:text-base xl:text-lg text-right xxs:text-white md:text-black">
        Billboard Hot 100
      </div>
      {billboardWeek !== "" ? (
        <div className="font-poppins font-semibold xxs:text-sm md:text-md lg:text-xl xl:text-2xl text-right xxs:text-white md:text-black text-nowrap">
          {billboardWeek}
        </div>
      ) : (
        <div className="xs:w-[140px] lg:w-[230px] xs:h-[15px] lg:h-[20px]">
          <BillboardSkeletonText />
        </div>
      )}
    </div>
  );
};
