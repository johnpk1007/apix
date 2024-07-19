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

  const target = useRef(null);
  let result = [];

  const [num, setNum] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/main");
      // const response = await fetch("/api/update/weekly");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      result = await response.json();
      const slicedResult = result.slice(0, 10);
      setData(slicedResult);
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

  useEffect(() => {
    console.log("num:", num);
  }, [num]);

  return (
    <div className="mt-[290px] flex flex-col">
      <BillboardCardPack data={data} />
      <div ref={target}>ref</div>
    </div>
  );
}
