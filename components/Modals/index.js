import { View, Modal, Text } from "react-native";
// import COLORS from "../../constants/theme/apptheme";
import styles from "./styles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

const Modals = ({ props }) => {
  const [showModal, setShowModal] = useState(true);
  function SuccessModal() {
    if (props.type === "CheckPhone") {
      const navigation = useNavigation();
      const user = useSelector((state) => state.user);

      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
        navigation.navigate("OTPVerification", { type: "SignUp" });
      }, 5000);

      return (
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="checkcircleo" size={70} color="white" />
          </View>
          <Text
            style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
          >
            Welcome, {user.userInfo.fullName} {"\n"}
            Please verify your phone
          </Text>
        </View>
      );
    } else if (props.type === "checkPhoneOtp") {
      const navigation = useNavigation();
      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
        navigation.navigate("SignUpScreen");
      }, 5000);
      return (
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="checkcircleo" size={70} color="white" />
          </View>
          <Text
            style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
          >
            Great! {"\n"}
            Your Account is activated
          </Text>
        </View>
      );
    } else if (props.type === "signup") {
      const navigation = useNavigation();
      // const user = useSelector((state) => state.user);
      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
        navigation.navigate("SignInScreen");
      }, 5000);
      return (
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="checkcircleo" size={70} color="white" />
          </View>
          <Text
            style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
          >
            Hooray! {"\n"}
            You have created account!
          </Text>
        </View>
      );
    } else if (props.type === "activateAccount") {
      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
      }, 5000);
      return (
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="checkcircleo" size={70} color="white" />
          </View>
          <Text
            style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
          >
            Great! {"\n"}
            Account Activated
          </Text>
        </View>
      );
    } else if (props.type === "PrimaryAccount") {
      setTimeout(() => {
        setShowModal(false);
        props.setIsModal(false);
      }, 5000);
      return (
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="checkcircleo" size={70} color="white" />
          </View>
          <Text
            style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
          >
            Well Done! {"\n"}
            you have set primary account
          </Text>
        </View>
      );
    }
  }
  function ErrorModal() {
    if (props.type === "CheckPhone") {
      const loader = useSelector((state) => state.loading);
      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
      }, 5000);
      return (
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: COLORS.red,
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="questioncircleo" size={70} color="white" />
          </View>

          {loader.error.msg === 404 ? (
            <Text
              style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
            >
              Hmm... you don't have account! {"\n"} {"\n"} please Onboard
              yourself
            </Text>
          ) : loader.error.msg === 409 ? (
            <Text
              style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
            >
              you have already registered {"\n"} {"\n"}
              please login!
            </Text>
          ) : (
            <Text
              style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
            >
              Network Error
            </Text>
          )}
        </View>
      );
    } else if (props.type === "signup") {
      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
      }, 5000);
      return (
        <View style={[styles.modalContainer]}>
          <View
            style={{
              backgroundColor: COLORS.red,
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="questioncircleo" size={70} color="white" />
          </View>
          <Text
            style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
          >
            Sorry! {"\n"}
            Username already exist!
          </Text>
        </View>
      );
    } else if (props.type === "activateAccount") {
      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
      }, 5000);
      return (
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: COLORS.red,
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="questioncircleo" size={70} color="white" />
          </View>
          <Text
            style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
          >
            Are you sure it is Your Account? {"\n"} {"\n"}
            Please, try again!
          </Text>
        </View>
      );
    } else if (props.type === "home") {
      const loader = useSelector((state) => state.loading);
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
      return (
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: "red",
              padding: 10,
              flex: 1,
              alignItems: "center",
            }}
          >
            <AntDesign name="questioncircleo" size={70} color="red" />
          </View>
          <Text
            style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
          >
            {loader.error.msg === "Network Error"
              ? "check your internet"
              : loader.error.msg}
          </Text>
        </View>
      );
    } else {
      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
      }, 5000);
      return (
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: COLORS.red,
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="questioncircleo" size={70} color="white" />
          </View>
          <Text
            style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}
          >
            Invalid Token!
          </Text>
        </View>
      );
    }
  }
  return (
    <Modal visible={showModal} transparent={true} animationType={"slide"}>
      <View style={styles.modalBackGround}>
        {props.modalType === "success" ? SuccessModal() : ErrorModal()}
      </View>
    </Modal>
  );
};

export default Modals;
