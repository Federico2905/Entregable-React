//importaciones de los Providers
import { FoundContextProvider } from "./foundContext";
import { UserContextProvider } from "./userContext";

export const Providers = ({ children }) => {
  return (
    <FoundContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </FoundContextProvider>
  );
};
