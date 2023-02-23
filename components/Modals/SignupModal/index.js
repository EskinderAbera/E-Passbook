import { View, Modal, Text, Image } from "react-native";
import icons from "../../../constants/icons";
import styles from "./styles";

const SignUpModal = () => {
  return (
    <Modal visible={true} transparent={true} animationType={"slide"}>
      <View style={styles.modalBackGround}>
        <View style={[styles.modalContainer]}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={icons.success}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>

          <Text
            style={{ marginVertical: 35, fontSize: 20, textAlign: "center" }}
          >
            Registration was successful
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default SignUpModal;
