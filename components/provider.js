"use client";

import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [billboardWeek, setBillboardWeek] = useState("");
  return (
    <Context.Provider value={{ billboardWeek, setBillboardWeek }}>
      {children}
    </Context.Provider>
  );
};
