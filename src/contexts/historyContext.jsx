//importacion de hooks
import { useState, createContext } from "react";

export const historyContext = createContext([]);

export const HistoryContextProvider = ({ children }) => {
  const [History, setHistory] = useState([]);
  return <historyContext.Provider value={{ History, setHistory }}> {children}</historyContext.Provider>;
};
