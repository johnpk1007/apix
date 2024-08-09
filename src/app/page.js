"use client";

import { useEffect, useState, useContext, useRef } from "react";
import { stringFromId } from "./stringFromId";
import { BillboardCardPack } from "../../components/billboardCardPack";
import { Navigation } from "../../components/navigation";
import { Context } from "../../components/provider";

export default function HomePage() {
  const { data, setData, setNum, firstCardscrollable } = useContext(Context);
  const [billboardWeek, setBillboardWeek] = useState("");

  const floorTarget = useRef(null);
  const sessionData =
    typeof window !== "undefined" ? sessionStorage.getItem("data") : null;

  const setSessionData = () => {
    const responseJson = JSON.parse(sessionData);
    setBillboardWeek(stringFromId(responseJson[0]._id));
    setData(responseJson);
  };

  // normal fetch
  const fetchData = async () => {
    try {
      const response = await fetch("/api/main");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseJson = await response.json();
      setBillboardWeek(stringFromId(responseJson[0]._id));
      setData(responseJson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (data.length === 0) {
      if (sessionData) {
        setSessionData();
        sessionStorage.removeItem("data");
      } else {
        fetchData();
      }
    } else {
      setBillboardWeek(stringFromId(data[0]._id));
    }
  }, []);

  const callback = (entry) => {
    if (entry[0].isIntersecting) {
      if (firstCardscrollable) {
        setNum((prevNum) => prevNum + 1);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px 0px 500px 0px",
      threshold: 0,
    });
    if (floorTarget.current) {
      observer.observe(floorTarget.current);
    }
    return () => {
      if (floorTarget.current) {
        observer.unobserve(floorTarget.current);
      }
    };
  }, [floorTarget, firstCardscrollable]);

  return (
    <div className="relative">
      <div className="flex w-full items-stretch sm:h-[150px] xl:h-[170px] fixed top-0 z-10 border-b-2 border-neutral-300">
        <div className="bg-black grow"></div>
        <div className="container relative max-w-screen-xl">
          <Navigation billboardWeek={billboardWeek} />
        </div>
        <div className="grow"></div>
      </div>
      <div className="flex">
        <div className="bg-black flex-1 top-0 bottom-0"></div>
        <div className="container flex flex-col xxs:mt-[150px] xl:mt-[170px] max-w-screen-xl">
          <BillboardCardPack />
          <div ref={floorTarget}></div>
        </div>
        <div className="flex-1 top-0 bottom-0"></div>
      </div>
    </div>
  );
}
