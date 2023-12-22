//importacion de los Providers
import { FoundContextProvider } from "./foundContext";
import { UserContextProvider } from "./userContext";
import { SearchContextProvider } from "./searchContext";
import { HistoryContextProvider } from "./historyContext";

export const Providers = ({ children }) => {
  return (
    <HistoryContextProvider>
      <SearchContextProvider>
        <FoundContextProvider>
          <UserContextProvider>{children}</UserContextProvider>
        </FoundContextProvider>
      </SearchContextProvider>
    </HistoryContextProvider>
  );
};
