import { View, Modal, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import styles from "./styles";

const AccountActivate = (props) => {
  function SuccessModal() {
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
        <Text style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}>
          {props.desc}
        </Text>
      </View>
    );
  }
  function ErrorModal() {
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
        <Text style={{ marginVertical: 50, fontSize: 20, textAlign: "center" }}>
          {props.desc}
        </Text>
      </View>
    );
  }
  return (
    <Modal visible={true} transparent={true} animationType={"slide"}>
      <View style={styles.modalBackGround}>
        {props.msg === "success" ? SuccessModal() : ErrorModal()}
      </View>
    </Modal>
  );
};

export default AccountActivate;
