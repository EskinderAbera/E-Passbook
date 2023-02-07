import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [photo, setPhoto] = useState(null);
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [signature, setSignature] = useState(null);

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
        openModal,
        setOpenModal,
        activeStepIndex,
        setActiveStepIndex,
        formData,
        setFormData,
        photo,
        setPhoto,
        idFront,
        setIdFront,
        idBack,
        setIdBack,
        signature,
        setSignature,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
