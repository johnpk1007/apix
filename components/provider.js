"use client";

import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);
  const [firstCardscrollable, setFfirstCardScrollable] = useState(false);
  return (
    <Context.Provider
      value={{
        data,
        setData,
        num,
        setNum,
        firstCardscrollable,
        setFfirstCardScrollable,
      }}
    >
      {children}
    </Context.Provider>
  );
};
