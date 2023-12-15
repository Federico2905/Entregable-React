//importaciones de React
import { createContext, useState } from "react";

export const searchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [CurrentSearch, setCurrentSearch] = useState("");
  return <searchContext.Provider value={{ CurrentSearch, setCurrentSearch }}>{children}</searchContext.Provider>;
};
