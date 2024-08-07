"use client";

import { Context } from "./provider";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export const ArtistLinkButton = ({ artist, page, extra }) => {
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
      onClick={handleClick}
      className="rounded-r-lg xxs:hover:bg-slate-800 md:hover:bg-slate-100 cursor-pointer"
    >
      {extra}
      {extra === "Featuring" || extra === "&" || extra === "X" || extra === "x"
        ? " "
        : ""}
      {artist}
      {page.page ? (
        <div className="absolute xxs:left-[-15px] sm:left-[-25px] lg:left-[-30px] xxs:w-[15px] sm:w-[25px] lg:w-[30px] top-0 rounded-l-lg top-0 bottom-0 bg-inherit">
          +
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
