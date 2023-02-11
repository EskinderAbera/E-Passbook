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
  const [accounts, setAccounts] = useState([
    {
      accountNo: "1000089352733",
      balance: "11243.45",
      openingDate: "24 AUG 2016",
      product: "Ordinary Savings Account",
      status: false,
      statment: [
        {
          CRAMT: "1500.00",
          DATE: "30 JUN 2022",
          DESC: "Transfer",
          DRAMT: "0.00",
          TXNREF: "FT22181023T3\\BNK",
        },
        {
          CRAMT: "0.00",
          DATE: "01 JUN 2022",
          DESC: "Payment",
          DRAMT: "300.00",
          TXNREF: "FT22181023T4\\BNK",
        },
        {
          CRAMT: "0.00",
          DATE: "22 MAY 2022",
          DESC: "Transfer",
          DRAMT: "11000.00",
          TXNREF: "FT22181023T5\\BNK",
        },
        {
          CRAMT: "1300.00",
          DATE: "06 MAY 2022",
          DESC: "Owe",
          DRAMT: "0.00",
          TXNREF: "FT22181023T6\\BNK",
        },
        {
          CRAMT: "700.00",
          DATE: "01 MAY 2022",
          DESC: "Transfer",
          DRAMT: "0.00",
          TXNREF: "FT22181023T7\\BNK",
        },
        {
          CRAMT: "0.00",
          DATE: "30 FEB 2022",
          DESC: "Transfer",
          DRAMT: "9100.00",
          TXNREF: "FT22181023T8\\BNK",
        },
        {
          CRAMT: "200.00",
          DATE: "25 FEB 2022",
          DESC: "Transfer",
          DRAMT: "0.00",
          TXNREF: "FT22181023T9\\BNK",
        },
        {
          CRAMT: "0.00",
          DATE: "20 JAN 2022",
          DESC: "Transfer",
          DRAMT: "3000.00",
          TXNREF: "FT22181024T3\\BNK",
        },
      ],
    },
    {
      accountNo: "1000043283477",
      balance: "16239.38",
      openingDate: "12 JAN 2018",
      product: "Gudunfa Saving Account",
      status: false,
      statment: [
        {
          CRAMT: "0.00",
          DATE: "20 JUN 2022",
          DESC: "Transfer",
          DRAMT: "12435.00",
          TXNREF: "FT22181033T3\\BNK",
        },
        {
          CRAMT: "0.00",
          DATE: "23 JUN 2022",
          DESC: "Transfer",
          DRAMT: "1200.00",
          TXNREF: "FT22181043T3\\BNK",
        },
        {
          CRAMT: "300.00",
          DATE: "13 MAY 2022",
          DESC: "Transfer",
          DRAMT: "0.00",
          TXNREF: "FT22181053T3\\BNK",
        },
        {
          CRAMT: "13200.00",
          DATE: "02 MAY 2022",
          DESC: "Transfer",
          DRAMT: "0.00",
          TXNREF: "FT22181063T3\\BNK",
        },
        {
          CRAMT: "10000.00",
          DATE: "20 FEB 2022",
          DESC: "Transfer",
          DRAMT: "0.00",
          TXNREF: "FT22181073T3\\BNK",
        },
        {
          CRAMT: "0.00",
          DATE: "07 FEB 2022",
          DESC: "Transfer",
          DRAMT: "2500.00",
          TXNREF: "FT22181083T3\\BNK",
        },
        {
          CRAMT: "1900.00",
          DATE: "02 FEB 2022",
          DESC: "Transfer",
          DRAMT: "0.00",
          TXNREF: "FT22181093T3\\BNK",
        },
        {
          CRAMT: "29840.00",
          DATE: "25 JAN 2022",
          DESC: "Transfer",
          DRAMT: "0.00",
          TXNREF: "FT22181123T3\\BNK",
        },
      ],
    },
    {
      accountNo: "1000043283414",
      balance: "16239.38",
      openingDate: "31 JAN 2018",
      product: "Gudunfa Saving Account",
      status: false,
      // statment: [
      //   {
      //     CRAMT: "0.00",
      //     DATE: "21 JUN 2022",
      //     DESC: "Transfer",
      //     DRAMT: "12435.00",
      //     TXNREF: "FT22181033T3\\BNK",
      //   },
      //   {
      //     CRAMT: "0.00",
      //     DATE: "24 JUN 2022",
      //     DESC: "Transfer",
      //     DRAMT: "1200.00",
      //     TXNREF: "FT22181043T3\\BNK",
      //   },
      //   {
      //     CRAMT: "300.00",
      //     DATE: "14 MAY 2022",
      //     DESC: "Transfer",
      //     DRAMT: "0.00",
      //     TXNREF: "FT22181053T3\\BNK",
      //   },
      //   {
      //     CRAMT: "13200.00",
      //     DATE: "02 MAY 2022",
      //     DESC: "Transfer",
      //     DRAMT: "0.00",
      //     TXNREF: "FT22181063T3\\BNK",
      //   },
      //   {
      //     CRAMT: "10000.00",
      //     DATE: "20 FEB 2022",
      //     DESC: "Transfer",
      //     DRAMT: "0.00",
      //     TXNREF: "FT22181073T3\\BNK",
      //   },
      //   {
      //     CRAMT: "0.00",
      //     DATE: "07 FEB 2022",
      //     DESC: "Transfer",
      //     DRAMT: "2500.00",
      //     TXNREF: "FT22181083T3\\BNK",
      //   },
      //   {
      //     CRAMT: "1900.00",
      //     DATE: "02 FEB 2022",
      //     DESC: "Transfer",
      //     DRAMT: "0.00",
      //     TXNREF: "FT22181093T3\\BNK",
      //   },
      //   {
      //     CRAMT: "29840.00",
      //     DATE: "25 JAN 2022",
      //     DESC: "Transfer",
      //     DRAMT: "0.00",
      //     TXNREF: "FT22181123T3\\BNK",
      //   },
      // ],
    },
    {
      accountNo: "1000043283415",
      balance: "16239.38",
      openingDate: "29 JAN 2018",
      product: "Gudunfa Saving Account",
      status: false,
      // statment: [
      //   {
      //     CRAMT: "0.00",
      //     DATE: "20 JUN 2022",
      //     DESC: "Transfer",
      //     DRAMT: "12435.00",
      //     TXNREF: "FT22181033T3\\BNK",
      //   },
      //   {
      //     CRAMT: "0.00",
      //     DATE: "23 JUN 2022",
      //     DESC: "Transfer",
      //     DRAMT: "1200.00",
      //     TXNREF: "FT22181043T3\\BNK",
      //   },
      //   {
      //     CRAMT: "300.00",
      //     DATE: "13 MAY 2022",
      //     DESC: "Transfer",
      //     DRAMT: "0.00",
      //     TXNREF: "FT22181053T3\\BNK",
      //   },
      //   {
      //     CRAMT: "13200.00",
      //     DATE: "02 MAY 2022",
      //     DESC: "Transfer",
      //     DRAMT: "0.00",
      //     TXNREF: "FT22181063T3\\BNK",
      //   },
      //   {
      //     CRAMT: "10000.00",
      //     DATE: "20 FEB 2022",
      //     DESC: "Transfer",
      //     DRAMT: "0.00",
      //     TXNREF: "FT22181073T3\\BNK",
      //   },
      //   {
      //     CRAMT: "0.00",
      //     DATE: "07 FEB 2022",
      //     DESC: "Transfer",
      //     DRAMT: "2500.00",
      //     TXNREF: "FT22181083T3\\BNK",
      //   },
      //   {
      //     CRAMT: "1900.00",
      //     DATE: "02 FEB 2022",
      //     DESC: "Transfer",
      //     DRAMT: "0.00",
      //     TXNREF: "FT22181093T3\\BNK",
      //   },
      //   {
      //     CRAMT: "29840.00",
      //     DATE: "25 JAN 2022",
      //     DESC: "Transfer",
      //     DRAMT: "0.00",
      //     TXNREF: "FT22181123T3\\BNK",
      //   },
      // ],
    },
  ]);
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

  const updateAccounts = (accountNo, account) => {
    setAccounts(
      accounts.map((acct) => (acct.accountNo === accountNo ? account : acct))
    );
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
        updateAccounts,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
