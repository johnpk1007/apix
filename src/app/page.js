"use client";

import { useEffect, useState, useContext, useRef, useCallback } from "react";
import { Context } from "../../components/provider";
import { stringFromId } from "./stringFromId";
import { BillboardCard } from "../../components/billboardCard";
import { BillboardCardPack } from "../../components/billboardCardPack";
import { root } from "postcss";
import { Navigation } from "../../components/navigation";

export default function HomePage() {
  // const { billboardWeek, setBillboardWeek } = useContext(Context);
  const [data, setData] = useState([]);
  const [billboardWeek, setBillboardWeek] = useState("");
  const [num, setNum] = useState(0);

  const target = useRef(null);

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
    fetchData();
  }, []);

  // // daily fetch
  // const fetchDaily = async () => {
  //   await fetch("/api/update/daily");
  // };
  // useEffect(() => {
  //   fetchDaily();
  // }, []);

  // // weekly fetch
  // const fetchWeekly = async () => {
  //   await fetch("/api/update/weekly");
  // };
  // useEffect(() => {
  //   fetchWeekly();
  // }, []);

  // // experiment fetch
  // const fetchExperiment = async () => {
  //   await fetch("/api/experiment");
  // };
  // useEffect(() => {
  //   fetchExperiment();
  // }, []);

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
    <>
      <Navigation billboardWeek={billboardWeek} />
      <div className="mt-[170px] flex flex-col">
        <BillboardCardPack data={data} num={num} />
        <div ref={target}></div>
      </div>
    </>
  );
}
