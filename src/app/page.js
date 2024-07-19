"use client";

import { useEffect, useState, useContext } from "react";
import { Context } from "../../components/provider";
import { stringFromId } from "./stringFromId";
import { BillboardCard } from "../../components/billboardCard";

export default function HomePage() {
  const { billboardWeek, setBillboardWeek } = useContext(Context);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/main");
      // const response = await fetch("/api/update/weekly");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("result:", result);
      setData(result);
      return result[0]._id;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    const func = async () => {
      const dataId = await fetchData();
      const string = stringFromId(dataId);
      setBillboardWeek(string);
    };
    func();
  }, []);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="mt-[290px]">
      {data.map((singleData) => (
        <BillboardCard key={singleData._id} data={singleData} />
      ))}
    </div>
  );
}
