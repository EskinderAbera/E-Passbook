import React from "react";
import {
  PersonalInfo,
  Address,
  Documents,
  Employment,
  Agreement,
} from "../components";
import { useStateContext } from "../Contexts/ContextProvider";

export const FormPagination = ({ navigation }) => {
  const { activeStepIndex } = useStateContext();
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
