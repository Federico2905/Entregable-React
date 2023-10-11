//importaciones de React
import { createContext, useState } from "react";

export const foundContext = createContext({ Users: [], Repos: [] });

export const FoundContextProvider = ({ children }) => {
  const [Found, SetFound] = useState({ Users: [], Repos: [] });
  return <foundContext.Provider value={{ Found, SetFound }}>{children}</foundContext.Provider>;
};
