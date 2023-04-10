import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loader";
import Modals from "../../components/Modals";
import ChangePasswordAction from "../../store/Actions/ChangePasswordAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChangePassword = () => {
  const [currentPassword, onChangeCurrentPassword] = React.useState("");
  const [newPassword, onChangeNewPassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  const [disable, onChangeDisable] = React.useState(true);
  const [mismatch, onChangeMismatch] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const loader = useSelector((state) => state.loading);
  const changePassword = useSelector((state) => state.changePassword);
  const dispatch = useDispatch();

  React.useEffect(() => {
    onChangeMismatch(false);
    if (
      currentPassword.length < 4 ||
      newPassword.length < 4 ||
      confirmPassword.length < 4
    ) {
      onChangeDisable(true);
    } else {
      onChangeDisable(false);
    }
  }, [currentPassword, newPassword, confirmPassword]);

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      onChangeMismatch(true);
    } else {
      setShow(true);
      const data = {
        oldPassword: currentPassword,
        newPassword,
      };
      onChangeMismatch(false);
      const username = await AsyncStorage.getItem("username");
      dispatch(ChangePasswordAction(data, username));
    }
  };

  return (
    <View style={styles.container}>
      {show && loader.loading && <Loading msg={"give us a moment"} />}
      {show && !loader.loading && Object.keys(loader.error).length > 0 && (
        <Modals
          props={{ modalType: "error", setShow, type: "changePassword" }}
        />
      )}
      {!loader.loading &&
        Object.keys(changePassword.info).length > 0 &&
        show && (
          <Modals
            props={{
              modalType: "success",
              type: "changePassword",
              setShow,
            }}
          />
        )}
      <View style={{ padding: 10, flex: 1 }}>
        <Text>Current Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCurrentPassword}
          value={currentPassword}
          placeholder="enter old password *"
        />
        <Text>New Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNewPassword}
          value={newPassword}
          placeholder="enter new password *"
        />
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeConfirmPassword}
          value={confirmPassword}
          placeholder="enter confirm password *"
        />
        {mismatch && (
          <Text style={{ margin: 10, color: "red" }}>
            Password Does not Match
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.btnContainer(disable)}
        disabled={disable}
        onPress={handleSubmit}
      >
        <Text style={styles.btnTxt}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;
