import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { setActiveStepIndex } from "../../store/Slices/OnBoardingSlice";

export const FormNavigation = () => {
  const { activeStepIndex, formData } = useSelector((state) => state?.onBoard)
  const dispatch = useDispatch();
  const changeScreen = (index) => {
    if (index === 0) {
      dispatch(setActiveStepIndex(index));
    } else if (index === 1 && formData.title !== undefined) {
      dispatch(setActiveStepIndex(index));
    } else if (index === 2 && formData.country !== undefined) {
      dispatch(setActiveStepIndex(index));
    } else if (index === 3) {
      dispatch(setActiveStepIndex(index));
    } else if (index === 4) {
      dispatch(setActiveStepIndex(index));
    } else {
      alert("please complete the previous form");
    }
  };
  return (
    <View style={tw`flex flex-col items-center pt-10 h-1/4`}>
      <Text style={tw`text-[30px]`}>Sign Up</Text>
      <View
        style={tw`w-full flex flex-row items-center justify-center px-10 py-16 pt-5`}
      >
        <TouchableOpacity onPress={() => changeScreen(0)}>
          <View
            style={tw`w-8 h-8 text-center font-medium border-[1px] ${activeStepIndex === 0 ? "border-[0px] bg-indigo-500 " : ""
              } border-[#ddd] rounded-full flex items-center justify-center`}
          >
            <Text style={tw` ${activeStepIndex === 0 ? "text-white" : ""}`}>
              1
            </Text>
          </View>
        </TouchableOpacity>
        <View style={tw`flex-auto border-t-2 border-[#ddd]`}></View>
        <TouchableOpacity onPress={() => changeScreen(1)}>
          <View
            style={tw`w-8 h-8 text-center font-medium border-[1px] ${activeStepIndex === 1 ? "border-[0px] bg-indigo-500 " : ""
              } border-[#ddd] rounded-full flex items-center justify-center`}
          >
            <Text style={tw` ${activeStepIndex === 1 ? "text-white" : ""}`}>
              2
            </Text>
          </View>
        </TouchableOpacity>
        <View style={tw`flex-auto border-t-2 border-[#ddd]`}></View>
        <TouchableOpacity onPress={() => changeScreen(2)}>
          <View
            style={tw`w-8 h-8 text-center font-medium border-[1px] ${activeStepIndex === 2 ? "border-[0px] bg-indigo-500 " : ""
              } border-[#ddd] rounded-full flex items-center justify-center`}
          >
            <Text style={tw` ${activeStepIndex === 2 ? "text-white" : ""}`}>
              3
            </Text>
          </View>
        </TouchableOpacity>
        <View style={tw`flex-auto border-t-2 border-[#ddd]`}></View>
        <TouchableOpacity onPress={() => changeScreen(3)}>
          <View
            style={tw`w-8 h-8 text-center font-medium border-[1px] ${activeStepIndex === 3 ? "border-[0px] bg-indigo-500 " : ""
              } border-[#ddd] rounded-full flex items-center justify-center`}
          >
            <Text style={tw` ${activeStepIndex === 3 ? "text-white" : ""}`}>
              4
            </Text>
          </View>
        </TouchableOpacity>
        <View style={tw`flex-auto border-t-2 border-[#ddd]`}></View>
        <TouchableOpacity onPress={() => changeScreen(4)}>
          <View
            style={tw`w-8 h-8 text-center font-medium border-[1px] ${activeStepIndex === 4 ? "border-[0px] bg-indigo-500 " : ""
              } border-[#ddd] rounded-full flex items-center justify-center`}
          >
            <Text style={tw` ${activeStepIndex === 4 ? "text-white" : ""}`}>
              5
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
