import { View, Modal, Text } from "react-native";
// import COLORS from "../../constants/theme/apptheme";
import styles from "./styles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

const NedajModal = ({ handleShow, show }) => {
  setTimeout(() => {
    handleShow();
  }, 5000);

  return (
    <Modal visible={show} transparent={true} animationType={"slide"}>
      <View style={styles.modalBackGround}>
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
            You have paid successfully
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default NedajModal;
