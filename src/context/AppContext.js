import React from "react";
import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mobilechat, setMobilechat] = useState(true);
  return (
    <AppContext.Provider
      value={{
        mobilechat,
        setMobilechat,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);


