//importaciones de los Providers
import { FoundContextProvider } from "./foundContext";
import { UserContextProvider } from "./userContext";
import { SearchContextProvider } from "./searchContext";

export const Providers = ({ children }) => {
  return (
    <SearchContextProvider>
      <FoundContextProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </FoundContextProvider>
    </SearchContextProvider>
  );
};
