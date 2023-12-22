//importacion de hooks
import { createContext, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState({});
  return <userContext.Provider value={{ CurrentUser, setCurrentUser }}>{children}</userContext.Provider>;
};
