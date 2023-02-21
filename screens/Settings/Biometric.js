import { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignUpModal from "../../components/SignupModal";
import ErrorModal from "../../components/Error";
import * as LocalAuthentication from "expo-local-authentication";

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
    flex: 8,
    flexDirection: "column",
    justifyContent: "center",
  },
  emailText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: "center",
  },
});

const Biometric = () => {
  const [showModal, setShowModal] = useState({ err: false, succ: false });

  useEffect(() => {
    showModal.succ &&
      setTimeout(() => {
        setShowModal({ ...showModal, succ: false });
      }, 3000);
    showModal.err &&
      setTimeout(() => {
        setShowModal({ ...showModal, err: false });
      }, 3000);
  }, [showModal]);

  const checkEnrolledLevel = async () => {
    let result = await LocalAuthentication.isEnrolledAsync();
    if (result) {
      try {
        await AsyncStorage.setItem("@enrolled", result.toString());
        setShowModal({ ...showModal, succ: true, err: false });
      } catch (e) {
        console.log("err", e);
        setShowModal({ ...showModal, succ: false, err: true });
      }
    } else {
      await AsyncStorage.setItem("@enrolled", result.toString());
      setShowModal({ ...showModal, succ: false, err: true });
    }
  };
  return (
    <>
      {showModal.succ && <SignUpModal />}
      {showModal.err && <ErrorModal />}
      <TouchableOpacity onPress={() => checkEnrolledLevel()}>
        <View style={[styles.container]}>
          <Icon name="contact-support" size={30} style={styles.emailIcon} />
          <View style={styles.emailRow}>
            <View style={styles.emailColumn}>
              <Text style={styles.emailText}>Biometric</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Biometric;
