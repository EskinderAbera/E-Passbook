import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const ChangePassword = () => {
  const route = useRoute();
  const { username } = route.params;
  const [inputs, setInputs] = React.useState([
    {
      id: "currentPassword",
      label: "Current Password",
      value: "",
      placeholder: "Enter Current Password",
    },
    {
      id: "newPassword",
      label: "New Password",
      value: "",
      placeholder: "Enter New Password",
    },
    {
      id: "confirmNewPassword",
      label: "Confirm New Password",
      value: "",
      placeholder: "Confirm Password",
    },
  ]);
  const [isConfirmDisabled, setIsConfirmDisabled] = React.useState(true);
  const [isErrorModalVisible, setIsErrorModalVisible] = React.useState(false);

  const handleInputChange = (id, text) => {
    setInputs((prevInputs) => {
      const updatedInputs = prevInputs.map((input) => {
        if (input.id === id) {
          return { ...input, value: text };
        }
        return input;
      });
      return updatedInputs;
    });
  };

  React.useEffect(() => {
    setIsConfirmDisabled(inputs.some((input) => input.value.length < 5));
  }, [inputs]);

  const handleConfirmButtonPress = () => {
    if (inputs[1].value !== inputs[2].value) {
      setIsErrorModalVisible(true);
      return;
    } else {
      const data = inputs.reduce((acc, input) => {
        acc[input.id] = input.value;
        return acc;
      }, {});
      console.log(data);
    }
  };

  const renderItem = ({ item }) => {
    const isCurrentPassword = item.id === "currentPassword";

    const isPasswordValid = item.value.length >= 5;

    return (
      <React.Fragment>
        <Text>{item.label}</Text>
        <TextInput
          value={item.value}
          onChangeText={(text) => handleInputChange(item.id, text)}
          secureTextEntry={isCurrentPassword}
          style={styles.inputContainer(isPasswordValid)}
          placeholder={item.placeholder}
        />
        {!isPasswordValid && (
          <Text style={{ color: "red", marginBottom: 10 }}>
            Password must be at least 5 characters long
          </Text>
        )}
      </React.Fragment>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={inputs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={styles.btnContainer(isConfirmDisabled)}
        onPress={handleConfirmButtonPress}
        disabled={isConfirmDisabled}
      >
        <Text style={styles.btnTxt}>Confirm</Text>
      </TouchableOpacity>
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
              Current password does not match confirm password.
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
              onPress={() => setIsErrorModalVisible(false)}
            >
              <Text style={styles.btnTxt}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChangePassword;
