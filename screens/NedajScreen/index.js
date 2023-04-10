import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useStateContext } from "../../Contexts/ContextProvider";
import NedajModal from "../../components/Modals/nedajModal";

const NedajScreen = ({ navigation }) => {
  const { qrdata, setQrData } = useStateContext();
  const [merchantName, setMerchantName] = useState("Nedaj");
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? (
        <NedajModal handleShow={() => setShow(false)} show={show} />
      ) : (
        <View style={styles.container}>
          <View style={styles.inputBox}>
            <TextInput
              style={{
                flex: 1,
                borderBottomColor: COLORS.primary,
                borderBottomWidth: 1,
                fontSize: 20,
              }}
              onChangeText={setQrData}
              placeholder="Merchant Code"
              placeholderTextColor={COLORS.darkgray}
              value={qrdata}
              keyboardType="numeric"
            />
            <Ionicons
              name="qr-code-outline"
              size={40}
              color="black"
              onPress={() => navigation.navigate("QRCode")}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              marginTop: 30,
              height: 40,
              width: "60%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
              Verify Merchant
            </Text>
          </TouchableOpacity>
          <View style={{ width: "100%", marginTop: 60 }}>
            <TextInput
              style={{
                borderBottomColor: COLORS.primary,
                borderBottomWidth: 1,
                fontSize: 20,
                alignSelf: "flex-start",
                width: "90%",
                margin: 10,
                marginBottom: 20,
                color: "black",
              }}
              placeholder="Merchant Name"
              placeholderTextColor={COLORS.darkgray}
              value={qrdata ? merchantName : ""}
              editable={false}
            />
            <TextInput
              style={{
                borderBottomColor: COLORS.primary,
                borderBottomWidth: 1,
                fontSize: 20,
                alignSelf: "flex-start",
                width: "90%",
                margin: 10,
              }}
              placeholder="Amount"
              placeholderTextColor={COLORS.darkgray}
              value={amount}
              onChangeText={setAmount}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              marginTop: 30,
              height: 40,
              width: "60%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() => setShow(true)}
          >
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default NedajScreen;
