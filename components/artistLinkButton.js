"use client";

import { Context } from "./provider";
import { useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const ArtistLinkButton = ({ artist, extra }) => {
  const spanRef = useRef(null);
  const { data, num } = useContext(Context);
  const router = useRouter();
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const createRipple = (event) => {
    if (spanRef.current.classList.contains("ripple")) {
      spanRef.current.classList.remove("ripple");
    }
    setLeft(event.clientX - event.target.getBoundingClientRect().left - 10);
    setTop(event.clientY - event.target.getBoundingClientRect().top - 10);
    spanRef.current.classList.add("ripple");
  };

  const handleClick = (event) => {
    createRipple(event);
    sessionStorage.setItem("data", JSON.stringify(data));
    sessionStorage.setItem("height", `${window.scrollY}`);
    sessionStorage.setItem("num", `${num}`);
    router.push(`/artist/${artist}`);
  };
  return (
    <div
      onClick={handleClick}
      className="rounded-lg xs:hover:bg-slate-800 md:hover:bg-slate-100 cursor-pointer relative overflow-hidden"
    >
      {extra}
      {extra === "Featuring" || extra === "&" || extra === "X" || extra === "x"
        ? " "
        : ""}
      {artist}
      <span
        ref={spanRef}
        className="w-[20px] h-[20px]"
        style={{ left, top }}
      ></span>
    </div>
  );
};
