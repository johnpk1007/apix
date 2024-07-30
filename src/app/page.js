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
    console.log("SessionData");
    const responseJson = JSON.parse(sessionData);
    setBillboardWeek(stringFromId(responseJson[0]._id));
    setData(responseJson);
  };

  // normal fetch
  const fetchData = async () => {
    console.log("SessionData");
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
    <div>
      <Navigation billboardWeek={billboardWeek} />
      <div className="mt-[170px] flex flex-col">
        <BillboardCardPack />
        <div ref={floorTarget}></div>
      </div>
    </div>
  );
}
