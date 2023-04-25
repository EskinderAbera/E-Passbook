import { View, Text, Modal } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setMessage } from "../../store/Slices/ChangePasswordSlice";
import styles from "./styles";

const SuccessModal = ({ isSuccessModalVisible, changeSuccess, msg }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  setTimeout(() => {
    changeSuccess();
    dispatch(setMessage(""));
    navigation.reset({ index: 0, routes: [{ name: "SignInScreen" }] });
  }, 3000);
  return (
    <Modal
      visible={isSuccessModalVisible}
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
              backgroundColor: "#00adef",
              padding: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="checkcircleo" size={70} color="white" />
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
          {/* <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#00adef",
              alignItems: "center",
              marginLeft: 100,
              marginRight: 100,
              marginBottom: 10,
            }}
            onPress={() => changeSuccess()}
          >
            <Text style={styles.btnTxt}>OK</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
