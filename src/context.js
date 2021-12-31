import React from "react";
import { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModel, setIsModel] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const openModel = () => {
    setIsModel(true);
  };
  const closeModel = () => {
    setIsModel(false);
  };
  const openSidebar = () => {
    setIsSidebar(true);
  };
  const closeSidebar = () => {
    setIsSidebar(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModel,
        isSidebar,
        openModel,
        closeModel,
        openSidebar,
        closeSidebar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
