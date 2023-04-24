import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setError } from "../../store/Slices/loadingSlice";

const ErrorModal = ({ msg }) => {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const handlePress = () => {
    setShowModal(false);
    dispatch(setError(""));
  };
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
              backgroundColor: "white",
              borderColor: "red",
              borderWidth: 1,
              alignItems: "center",
              marginLeft: 100,
              marginRight: 100,
              marginBottom: 10,
            }}
            onPress={handlePress}
          >
            <Text style={styles.btnTxt}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
