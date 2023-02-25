import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import styles from "./styles";
import { COLORS } from "../../constants/theme";
import OtpVerifyAction from "../../store/Actions/OtpAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loader";
import Modals from "../../components/Modals";

const CELL_COUNT = 5;
const source = {
  uri: "https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png",
};

const OTPVerification = ({ route, navigation }) => {
  const { type } = route.params;
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loading);
  const checkStatus = useSelector((state) => state.otp);
  const [ModalOpen, setModalOpen] = useState(false);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  function renderHeader() {
    return (
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
        <Text style={styles.otpText}>OTP Verification</Text>
      </TouchableOpacity>
    );
  }

  const handleVerification = () => {
    setModalOpen(true);
    if (type === "SignUp") {
      dispatch(OtpVerifyAction(value));
    } else if (type === "ATM") {
      navigation.navigate("Home");
    } else if (type === "Account") {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Home");
    }
  };

  function renderBody() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          {renderHeader()}
          <SafeAreaView style={styles.root}>
            <Text style={styles.title}>Verification</Text>
            <Image style={styles.icon} source={source} />
            <Text style={styles.subTitle}>
              Please enter the verification code{"\n"}
              we sent to your mobile phone
            </Text>

            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFiledRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <View
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}
                >
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleVerification}
            >
              <Text style={styles.nextButtonText}>Verify</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderBody()}
      {loader.loading && <Loading msg={"give us a moment"} />}
      {!loader.loading && Object.keys(loader.error).length > 0 && ModalOpen && (
        <Modals props={{ modalType: "error", setModalOpen }} />
      )}
      {!loader.loading &&
        Object.keys(checkStatus.res).length > 0 &&
        ModalOpen && (
          <Modals
            props={{
              modalType: "success",
              type: "checkPhoneOtp",
              setModalOpen,
            }}
          />
        )}
    </SafeAreaView>
  );
};

export default OTPVerification;
