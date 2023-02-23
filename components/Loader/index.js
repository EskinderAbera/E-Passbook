import { StatusBar } from "expo-status-bar";
import { View, Text, ActivityIndicator, Modal } from "react-native";
import styles from "./styles";

const Loading = ({ msg }) => {
  return (
    <Modal visible={true} transparent={true} animationType={"slide"}>
      <View style={styles.modalBackGround}>
        <View style={styles.modalContainer}>
          <ActivityIndicator />
          <Text
            style={{
              marginVertical: 35,
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            {msg}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
