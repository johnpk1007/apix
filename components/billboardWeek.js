"use client";

import { useContext } from "react";
import { Context } from "./provider";

export const BillboardWeek = () => {
  const { billboardWeek, setBillboardWeek } = useContext(Context);
  return (
    <div className="flex flex-col justify-center items-end mr-3">
      <div className="font-poppins font-black text-2xl">Billboard Hot 100</div>
      <div className="font-poppins font-semibold text-3xl">{billboardWeek}</div>
    </div>
  );
};
