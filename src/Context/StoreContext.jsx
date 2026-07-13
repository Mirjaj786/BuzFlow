import { createContext } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

  const printHello = () => {
    console.log("Hello");
  };

  const contextValue = {
    printHello,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;