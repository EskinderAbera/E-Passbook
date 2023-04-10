import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PropTypes from "prop-types";

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

const Password = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
      <View style={[styles.container]}>
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
