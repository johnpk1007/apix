"use client";

import { useState, useEffect, useContext } from "react";
import { BillboardCard } from "./billboardCard";
import { Context } from "./provider";

const BillboardCardDeck = ({ dataSlice }) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      {arr.map((i) => (
        <BillboardCard key={i} data={dataSlice ? dataSlice[i] : null} />
      ))}
    </div>
  );
};

export const BillboardCardPack = () => {
  const { data, num, setFfirstCardScrollable } = useContext(Context);
  const dataArr = [];
  let arr = [];
  const [rest, setRest] = useState([]);
  const [scrollable, setScrollable] = useState(false);

  const sessionHeight =
    typeof window !== "undefined" ? sessionStorage.getItem("height") : null;
  const numberHeight =
    typeof window !== "undefined" ? Number(sessionHeight) : null;
  const sessionNum =
    typeof window !== "undefined" ? sessionStorage.getItem("num") : null;

  if (data.length !== 0) {
    for (let i = 1; i <= 100; i++) {
      if (i % 10 !== 0) {
        arr.push(data[i - 1]);
      } else {
        arr.push(data[i - 1]);
        dataArr.push(arr);
        arr = [];
      }
    }
  }

  useEffect(() => {
    if (sessionNum === null) {
      if (data.length > 0 && num > 0) {
        if (dataArr.length === 10 && num < 10)
          setRest((prevRest) => {
            return [...prevRest, dataArr[num]];
          });
      }
    }
  }, [data, num]);

  useEffect(() => {
    if (sessionNum) {
      const slicedArr = dataArr.slice(1, Number(sessionNum) + 1);
      setRest(slicedArr);
      setScrollable(true);
      sessionStorage.removeItem("num");
    }
  }, [sessionNum]);

  useEffect(() => {
    if (dataArr.length > 0) {
      setFfirstCardScrollable(true);
    }
  }, [dataArr]);

  useEffect(() => {
    if (scrollable) {
      window.scrollTo(0, numberHeight);
      sessionStorage.removeItem("height");
    }
  }, [scrollable, numberHeight]);

  return (
    <div>
      <BillboardCardDeck dataSlice={dataArr ? dataArr[0] : null} />
      {rest.map((singleRest, index) => (
        <BillboardCardDeck key={index} dataSlice={singleRest} />
      ))}
    </div>
  );
};
