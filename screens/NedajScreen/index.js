import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useCallback } from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useStateContext } from "../../Contexts/ContextProvider";
import NedajModal from "../../components/Modals/nedajModal";
import LineChartItem from "./LineChartItem";
import BottomSheet from "./BottomSheet";
import { useFocusEffect } from "@react-navigation/native";

const NedajScreen = ({ navigation }) => {
  const { qrdata, setQrData } = useStateContext();
  const [show, setShow] = useState(false);
  const [editable, setEditable] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const onVerify = () => {
    setEditable(true);
    setQrData({ ...qrdata, merchantName: "Total" });
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     setShowModal(true);

  //     return () => {
  //       setShowModal(false);
  //     };
  //   }, [])
  // );

  return (
    // <>
    //   {show ? (
    //     <NedajModal handleShow={() => setShow(false)} show={show} />
    //   ) : (
    <ScrollView contentContainerStyle={styles.container}>
      {show && <NedajModal handleShow={() => setShow(false)} show={show} />}
      <BottomSheet />
      <View style={styles.inputBox}>
        <TextInput
          style={{
            flex: 1,
            borderBottomColor: COLORS.primary,
            borderBottomWidth: 1,
            fontSize: 20,
          }}
          onChange={(text) => {
            setQrData({ ...qrdata, merchantId: text });
          }}
          placeholder="Merchant Code"
          placeholderTextColor={COLORS.darkgray}
          value={qrdata.merchantId}
          keyboardType="numeric"
        />
        <Ionicons
          name="qr-code-outline"
          size={40}
          color="black"
          onPress={() => {
            navigation.navigate("QRCode");
            setEditable(false);
          }}
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
        onPress={onVerify}
      >
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
          Verify Merchant
        </Text>
      </TouchableOpacity>
      <View style={{ width: "100%", marginTop: 40 }}>
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
          value={qrdata.merchantName}
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
            marginBottom: 20,
            color: "black",
          }}
          placeholder="Amount"
          placeholderTextColor={COLORS.darkgray}
          value={qrdata.amount}
          onChange={(txt) => setQrData({ ...qrdata, amount: txt })}
          // onChangeText={editable ? setAmount : ""}
          editable={editable}
          keyboardType="numeric"
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
        onPress={() => {
          setShow(true);
          setQrData({
            ...qrdata,
            merchantId: "",
            merchantName: "",
            amount: "",
          });
        }}
      >
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
          Submit
        </Text>
      </TouchableOpacity>
      <LineChartItem />
    </ScrollView>
    // )}
    // </>
  );
};

export default NedajScreen;
