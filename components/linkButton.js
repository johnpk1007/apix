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
    <div className=" absolute xxs:left-[-15px] sm:left-[-25px] lg:left-[-30px] ">
      <div
        className="
      xxs:flex
      md:hidden
      font-medium 
      text-#8289a1 
      hover:text-slate-400 
      cursor-pointer 
      rounded-full 
      xxs:text-base 
      lg:text-2xl 
      xl:text-3xl 
      xxs:w-3 
      lg:w-5 
      xl:w-7
      xxs:h-3 
      lg:h-5 
      xl:h-7
      justify-center 
      items-center
      bg-center
      hover:bg-black
      hover:bg-[radial-gradient(circle,transparent_1%,black_1%)]
      hover:bg-center
      hover:bg-[length:10000%_10000%]
      active:bg-slate-500
      active:bg-[length:100%_100%]
      hover:duration-500
      active:duration-0
      "
        onClick={handleClick}
      >
        +
      </div>
      <div
        className="
    xxs:hidden
    md:flex
    xxs:left-[-15px] 
    sm:left-[-25px] 
    lg:left-[-30px] 
    font-medium 
    text-#8289a1 
    hover:text-slate-400 
    cursor-pointer 
    rounded-full 
    xxs:text-base 
    lg:text-2xl 
    xl:text-3xl 
    xxs:w-3 
    lg:w-5 
    xl:w-7
    xxs:h-3 
    lg:h-5 
    xl:h-7
    justify-center 
    items-center
    bg-center
    hover:bg-white
    hover:bg-[radial-gradient(circle,transparent_1%,white_1%)]
    hover:bg-center
    hover:bg-[length:10000%_10000%]
    active:bg-slate-300
    active:bg-[length:100%_100%]
    hover:duration-500
    active:duration-0
    "
        onClick={handleClick}
      >
        +
      </div>
    </div>
  );
};
