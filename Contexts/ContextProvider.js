import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [accounts, setAccounts] = useState([]);

  const handleUser = (user) => {
    setUser(user);
  };

  const handleAccounts = (accounts) => {
    setAccounts(accounts);
  };

  const handleName = (name) => {
    setName(name);
  };

  return (
    <StateContext.Provider
      value={{
        name,
        handleName,
        user,
        handleUser,
        accounts,
        handleAccounts,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
