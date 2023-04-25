import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
// import ErrorModal from "./ErrorModal";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loader";
import ChangePasswordAction from "../../store/Actions/ChangePasswordAction";
// import SuccessModal from "./SuccessModal";
import { setError } from "../../store/Slices/loadingSlice";
import ErrorModal from "../../components/Modals/ErrorModal";
import SuccessModal from "../../components/Modals/SuccessModal";

const ChangePassword = ({ navigation }) => {
  const route = useRoute();
  // const { username } = route.params; uncomment this one and remove the constant
  const username = "fatty";
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loading);
  const changePass = useSelector((state) => state.changePassword);

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
  const [showModal, setShowModal] = React.useState(false);
  const [msg, setMsg] = React.useState("");

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

  const handleConfirmButtonPress = async () => {
    setShowModal(true);
    if (inputs[1].value !== inputs[2].value) {
      // setMsg("Current password does not match confirm password.");
      dispatch(setError("Current password does not match confirm password."));
      return;
    } else {
      const data = inputs.reduce((acc, input) => {
        acc[input.id] = input.value;
        return acc;
      }, {});
      const newdata = {
        oldPassword: data.currentPassword,
        newPassword: data.newPassword,
      };
      dispatch(ChangePasswordAction(newdata, username));
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
      {loader.error && showModal && !loader.loading && (
        <ErrorModal msg={loader.error} handleShow={() => setShowModal(false)} />
      )}
      {loader.loading && showModal && !loader.error && (
        <Loading msg={"Give us a moment"} />
      )}
      {changePass.msg && !loader.loading && showModal && !loader.error && (
        <SuccessModal
          handlePress={() => {
            navigation.navigate("SignInScreen");
            setShowModal(false);
          }}
          msg={changePass.msg}
        />
      )}
    </View>
  );
};

export default ChangePassword;
