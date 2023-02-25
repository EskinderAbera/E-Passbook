import { View, Modal, Text, Image } from "react-native";
import icons from "../../constants/icons";
import styles from "./styles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

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
          <View style={{ alignItems: "center" }}>
            <Image
              source={icons.success}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>

          <Text
            style={{ marginVertical: 35, fontSize: 20, textAlign: "center" }}
          >
            Welcome, {user.userInfo.fullName} {"\n"}
            Please verify your phone
          </Text>
        </View>
      );
    } else if (props.type === "checkPhoneOtp") {
      const navigation = useNavigation();
      const user = useSelector((state) => state.user);
      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
        navigation.navigate("SignUpScreen");
      }, 5000);
      return (
        <View style={styles.modalContainer}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={icons.success}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>

          <Text
            style={{ marginVertical: 35, fontSize: 20, textAlign: "center" }}
          >
            Welldone, {user.userInfo.fullName} {"\n"}
            Your phone is verified!
          </Text>
        </View>
      );
    } else if (props.type === "signup") {
      console.log("I am here");
      const navigation = useNavigation();
      const user = useSelector((state) => state.user);
      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
        navigation.navigate("SignInScreen");
      }, 5000);
      return (
        <View style={styles.modalContainer}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={icons.success}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>

          <Text
            style={{ marginVertical: 35, fontSize: 20, textAlign: "center" }}
          >
            Hooray, {user.userInfo.fullName} {"\n"}
            You have created account!
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
          <View style={{ alignItems: "center" }}>
            <Image
              source={icons.error}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>
          {loader.error.msg === "404" ? (
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Hmm... you don't have account! {"\n"} {"\n"} please Onboard
              yourself
            </Text>
          ) : (
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              you have already registered {"\n"} {"\n"}
              please login!
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
        <View style={styles.modalContainer}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={icons.error}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>
          <Text>username exist</Text>
        </View>
      );
    } else {
      setTimeout(() => {
        setShowModal(false);
        props.setModalOpen(false);
      }, 5000);
      return (
        <View style={styles.modalContainer}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={icons.error}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>
          <Text>Invalid Token</Text>
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
