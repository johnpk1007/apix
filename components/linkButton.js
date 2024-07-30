"use client";

import { Context } from "./provider";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export const LinkButton = ({ artist }) => {
  const { data, num } = useContext(Context);
  const router = useRouter();
  const handleClick = () => {
    sessionStorage.setItem("data", JSON.stringify(data));
    sessionStorage.setItem("height", `${window.scrollY}`);
    sessionStorage.setItem("num", `${num}`);
    router.push(`/artist/${artist}`);
  };
  return (
    <div
      className="font-medium text-#8289a1 hover:text-slate-400 duration-300 cursor-pointer"
      onClick={handleClick}
    >
      +
    </div>
  );
};
