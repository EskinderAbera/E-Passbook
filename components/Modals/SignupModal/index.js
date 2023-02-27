import { AntDesign } from "@expo/vector-icons";
import { View, Modal, Text, Image } from "react-native";
import icons from "../../../constants/icons";
import { COLORS } from "../../../constants/theme";
import styles from "./styles";

const SignUpModal = () => {
  return (
    <Modal visible={true} transparent={true} animationType={"slide"}>
      <View style={styles.modalBackGround}>
        <View style={[styles.modalContainer]}>
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
            Are you sure it is Your Account? {"\n"} {"\n"}
            Please, try again!
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default SignUpModal;
