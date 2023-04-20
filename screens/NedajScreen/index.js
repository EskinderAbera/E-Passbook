import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useStateContext } from "../../Contexts/ContextProvider";
import NedajModal from "../../components/Modals/nedajModal";
import LineChartItem from "./LineChartItem";
import BottomSheet from "./BottomSheet";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/Loader";

const NedajScreen = ({ navigation }) => {
  const { qrdata, setQrData, merchantName } = useStateContext();
  // const [show, setShow] = useState(false);
  const [editable, setEditable] = useState(true);
  const [value, setValue] = useState(null);
  const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);

  // handle this using redux
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onVerify = () => {
    setEditable(true);
    // setQrData({ ...qrdata });
  };

  React.useEffect(() => {
    if (!qrdata.merchantId) {
      setIsConfirmDisabled(true);
    } else {
      setIsConfirmDisabled(false);
    }
  }, [qrdata]);

  const handleSubmit = async () => {
    setIsConfirmDisabled(true);
    setShowLoading(true);
    const username = await AsyncStorage.getItem("username");
    try {
      const res = await axios.post(
        `http://192.168.137.220:9000/api/nedaj/${username},`,
        qrdata
      );
      if (res.status === 200) {
        setShowSuccess(true);
      } else {
        setShowSuccess(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {showLoading && <Loading msg={"Loading"} />}
      {showSuccess && (
        <NedajModal
          handleShow={() => setShowSuccess(false)}
          show={showSuccess}
        />
      )}
      <BottomSheet value={value} setValue={setValue} />
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
          value={qrdata.merchantId && merchantName}
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
          value={qrdata.debitAmount}
          onChange={(txt) => setQrData({ ...qrdata, amount: txt })}
          // onChangeText={editable ? setAmount : ""}
          editable={editable}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: isConfirmDisabled ? "gray" : COLORS.primary,
          marginTop: 30,
          height: 40,
          width: "60%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
        onPress={handleSubmit}
        disabled={isConfirmDisabled ? true : false}
      >
        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontWeight: isConfirmDisabled ? "normal" : "bold",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
      <LineChartItem />
    </ScrollView>
  );
};

export default NedajScreen;
