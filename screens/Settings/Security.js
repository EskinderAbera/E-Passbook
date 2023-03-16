import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import * as LocalAuthentication from "expo-local-authentication";
import Modals from "../../components/Modals";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import AccountActivate from "../../components/Modals/AccountActivate";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 25,
  },
  emailColumn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
  emailIcon: {
    color: "gray",
    marginLeft: 22,
    marginRight: 20,
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  emailNameText: {
    color: "gray",
    fontSize: 14,
    fontWeight: "200",
  },
  emailRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emailText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: "center",
  },
});

const Security = () => {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleFingerEnable = async () => {
    if (!isEnrolled) {
      setShowModal(true);
    } else {
      await SecureStore.setItemAsync("checked", (!checked).toString());
      setChecked(!checked);
      setShowSuccessModal(true);
    }
  };

  useEffect(() => {
    const checkEnrolledAsync = async () => {
      const result = await LocalAuthentication.isEnrolledAsync();
      console.log("enroll", result);
      if (!result) {
        setIsEnrolled(false);
      } else {
        setIsEnrolled(true);
        let checkedValue = await SecureStore.getItemAsync("checked");
        if (checkedValue === "true") {
          setChecked(true);
        } else {
          setChecked(false);
        }
      }
    };
    checkEnrolledAsync();
  }, []);

  useEffect(() => {
    if (showModal | showSuccessModal) {
      setTimeout(() => {
        setShowModal(false);
        setShowSuccessModal(false);
      }, 5000);
    }
  }, [showModal, showSuccessModal]);

  return (
    <View style={[styles.container]}>
      {showModal && <Modals props={{ modalType: "error" }} />}
      {showSuccessModal && (
        <AccountActivate
          msg="success"
          desc={
            checked
              ? "Success, You have enabled fingerprint!"
              : "Success, You have disabled fingerprint!"
          }
          // props={{
          //   msg: "success",
          //   desc: "Success, You have enabled fingerprint!",
          // }}
        />
      )}
      <MaterialCommunityIcons
        name="fingerprint"
        size={30}
        style={styles.emailIcon}
      />
      <View style={styles.emailRow}>
        <Text style={styles.emailText}>Enable Finger Print</Text>
        <CheckBox
          checked={checked}
          containerStyle={{ bottom: 12.5 }}
          onPress={handleFingerEnable}
        />
      </View>
    </View>
  );
};

export default Security;
