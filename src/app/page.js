"use client";

import { useEffect, useState, useContext, useRef, useCallback } from "react";
import { Context } from "../../components/provider";
import { stringFromId } from "./stringFromId";
import { BillboardCard } from "../../components/billboardCard";
import { BillboardCardPack } from "../../components/billboardCardPack";
import { root } from "postcss";

export default function HomePage() {
  const { billboardWeek, setBillboardWeek } = useContext(Context);
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);

  const target = useRef(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/main");
      // const response = await fetch("/api/update/weekly");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseJson = await response.json();
      const billboardWeek = stringFromId(responseJson[0]._id);
      setBillboardWeek(billboardWeek);
      setData(responseJson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const callback = (entry) => {
    if (entry[0].isIntersecting) {
      setNum((prevNum) => prevNum + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target]);

  return (
    <div className="mt-[290px] flex flex-col">
      <BillboardCardPack data={data} num={num} />
      <div ref={target}></div>
    </div>
  );
}
