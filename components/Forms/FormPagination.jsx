import React from "react";
import { useSelector } from "react-redux";
import { PersonalInfo } from "./PersonalInfo";
import { Address } from "./Address";
import { Documents } from "./Documents";
import { Employment } from "./Employment";
import { Agreement } from "./Agreement";

export const FormPagination = ({ navigation }) => {
  const { activeStepIndex } = useSelector(state => state?.onBoard);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <PersonalInfo navigation={navigation} />;
      break;
    case 1:
      stepContent = <Address navigation={navigation} />;
      break;
    case 2:
      stepContent = <Documents navigation={navigation} />;
      break;
    case 3:
      stepContent = <Employment navigation={navigation} />;
      break;
    case 4:
      stepContent = <Agreement navigation={navigation} />;
      break;
  }

  return stepContent;
};
