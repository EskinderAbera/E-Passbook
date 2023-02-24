import { View, Modal, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import icons from "../../../constants/icons";
import styles from "./styles";

const ErrorModal = () => {
  const error = useSelector((state) => state.loading);
  return (
    <Modal visible={true} transparent={true} animationType={"slide"}>
      <View style={styles.modalBackGround}>
        <View style={[styles.modalContainer]}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={icons.error}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>
          {error.status === "404" ? (
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
      </View>
    </Modal>
  );
};

export default ErrorModal;
