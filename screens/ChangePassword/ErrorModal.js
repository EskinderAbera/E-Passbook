import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const ErrorModal = ({ isErrorModalVisible, changeError, msg }) => {
  return (
    <Modal
      visible={isErrorModalVisible}
      transparent={true}
      animationType="fade"
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="questioncircleo" size={70} color="white" />
          </View>
          <Text
            style={{
              marginVertical: 50,
              fontSize: 20,
              textAlign: "center",
              margin: 20,
            }}
          >
            {msg}
          </Text>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#00adef",
              alignItems: "center",
              marginLeft: 100,
              marginRight: 100,
              marginBottom: 10,
            }}
            onPress={() => changeError()}
          >
            <Text style={styles.btnTxt}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
