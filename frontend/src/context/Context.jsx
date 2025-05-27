import {createContext, useContext, useState} from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const server = "https://university-management-portal.onrender.com";
  const year="2024"
  const semester = "Fall"
  const maxCredit = 18

  return (
    <AppContext.Provider value={{ user, setUser,isLoggedIn, setIsLoggedIn, server, year, semester, maxCredit }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
