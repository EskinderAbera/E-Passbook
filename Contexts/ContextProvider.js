import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import * as LocalAuthentication from "expo-local-authentication";

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
  const [earlyPhoto, setEarlyPhoto] = useState(null);
  const [apply, setApply] = useState(false);
  const [isBiometric, setIsBiometric] = useState(false);
  const [fingerPrint, setFingerPrint] = useState(false);

  useEffect(() => {
    const checkBiometric = async () => {
      let result = await LocalAuthentication.hasHardwareAsync();
      if (result) setIsBiometric(true);
    };
    checkBiometric();
  }, []);

  const checkEnrolledLevel = useCallback(async () => {
    let result = await LocalAuthentication.isEnrolledAsync();
    result && setFingerPrint(true);
  }, [isBiometric]);

  const LoginWithFingerPrint = async () => {
    if (fingerPrint) {
      let result = await LocalAuthentication.authenticateAsync();
      console.log("hey", result);
    }
  };

  useEffect(() => {
    fingerPrint && LoginWithFingerPrint();
  }, [fingerPrint]);

  useEffect(() => {
    isBiometric && checkEnrolledLevel();
  }, [isBiometric]);

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
        earlyPhoto,
        setEarlyPhoto,
        apply,
        setApply,
        isBiometric,
        fingerPrint,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
