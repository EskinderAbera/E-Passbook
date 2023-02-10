import React from "react";
import SignatureScreen from "react-native-signature-canvas";
import { useRef } from "react";
import { useStateContext } from "../Contexts/ContextProvider";

export const SigniturePad = ({ navigation }) => {
  const { setSignature } = useStateContext();
  const ref = useRef();

  const handleOK = (signature) => {
    setSignature(signature);
    navigation.goBack();
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const handleClear = () => {
    console.log("clear success!");
  };

  const handleData = (data) => {
    console.log(data);
  };

  return (
    <SignatureScreen
      ref={ref}
      onOK={handleOK}
      onEmpty={handleEmpty}
      onClear={handleClear}
      onGetData={handleData}
      autoClear={true}
      trimWhitespace={true}
      imageType="image/svg+xml"
    />
  );
};
