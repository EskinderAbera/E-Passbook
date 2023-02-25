import { useEffect } from "react";
import { View, Modal, Text, Image } from "react-native";
import icons from "../../../constants/icons";
import styles from "./styles";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const CheckPhone = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);
  const [showModal, hideShowmodal] = useState(true);

  return (
    <Modal visible={showModal} transparent={true}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          hideShowmodal(false);
          navigation.navigate("OTPVerification", { type: "SignUp" });
        }}
        style={styles.modalBackGround}
      >
        <TouchableOpacity activeOpacity={1} style={[styles.modalContainer]}>
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
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default CheckPhone;
