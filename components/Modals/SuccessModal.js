import { View, Text, Modal } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SuccessModal = ({ msg, handlePress = () => {} }) => {
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    msg && setShowModal(true);
  }, [msg]);
  return (
    <Modal visible={showModal} transparent={true} animationType="fade">
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
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "white",
              borderColor: "#00adef",
              borderWidth: 1,
              alignItems: "center",
              marginLeft: 100,
              marginRight: 100,
              marginBottom: 10,
            }}
            onPress={handlePress()}
          >
            <Text style={styles.btnTxt}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
