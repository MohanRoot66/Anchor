"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import themes from "./theme";

// Create the context
export const Globalcontext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  return (
    <Globalcontext.Provider value={{ theme }}>
      {children}
    </Globalcontext.Provider>
  );
};

// Hook to use the context
export const useGlobalContext = () => useContext(Globalcontext);
