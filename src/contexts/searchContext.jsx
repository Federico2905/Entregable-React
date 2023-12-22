//importacion de hooks
import { createContext, useState } from "react";

export const searchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [CurrentSearchGlobal, setCurrentSearchGlobal] = useState("");
  return <searchContext.Provider value={{ CurrentSearchGlobal, setCurrentSearchGlobal }}>{children}</searchContext.Provider>;
};
