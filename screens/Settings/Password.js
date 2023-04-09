import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import SendOtpAction from "../../store/Actions/SendOtpAction";
import Loading from "../../components/Loader";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 25,
    marginTop: 25,
  },
  emailColumn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
  emailIcon: {
    color: "gray",
    marginLeft: 22,
    marginRight: 20,
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  emailNameText: {
    color: "gray",
    fontSize: 14,
    fontWeight: "200",
  },
  emailRow: {
    flex: 8,
    flexDirection: "column",
    justifyContent: "center",
  },
  emailText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: "center",
  },
});

const Password = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const ChangePassword = async () => {
    const username = await AsyncStorage.getItem("username");
    if (username) {
      dispatch(SendOtpAction(username));
      navigation.navigate("OTPVerification", { type: "changePassword" });
    } else {
      console.log(username);
    }
  };

  return (
    <TouchableOpacity onPress={ChangePassword}>
      <View style={styles.container}>
        <Icon name="form-textbox-password" size={30} style={styles.emailIcon} />
        <View style={styles.emailRow}>
          <View style={styles.emailColumn}>
            <Text style={styles.emailText}>Change Password</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Password;
