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
// import NedajModal from "../../components/Modals/nedajModal";
import LineChartItem from "./LineChartItem";
import BottomSheet from "./BottomSheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/Loader";
import uuid from "react-native-uuid";

const NedajScreen = ({ navigation }) => {
  const { qrdata, merchantName } = useStateContext();
  const [value, setValue] = useState(null);
  const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);

  // handle this using redux
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  React.useEffect(() => {
    if (!qrdata.MerchantId) {
      setIsConfirmDisabled(true);
    } else {
      setIsConfirmDisabled(false);
    }
  }, [qrdata]);

  const handleSubmit = async () => {
    setIsConfirmDisabled(true);
    const id = uuid.v4();
    const username = await AsyncStorage.getItem("username");
    const newQrdata = {
      ...qrdata,
      debitAccount: value,
      messageId: qrdata?.FuelType?.slice(0, 2).toUpperCase() + id,
      username,
    };
    console.log(JSON.stringify(newQrdata, null, 2));
    // alert(newQrdata);
    // try {
    //   const res = await axios.post(
    //     `http://192.168.137.220:9001/api/nedaj/${username}`,
    //     newQrdata
    //   );
    //   if (res.status === 200) {
    //     setShowSuccess(true);
    //     setShowLoading(false);
    //   } else {
    //     setShowSuccess(false);
    //     setShowLoading(false);
    //   }
    // } catch (error) {
    //   setShowLoading(false);
    // }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {showLoading && <Loading msg={"Loading"} />}
      {/* {showSuccess && (
        <NedajModal
          handleShow={() => setShowSuccess(false)}
          show={showSuccess}
        />
      )} */}
      <BottomSheet value={value} setValue={setValue} />
      <View style={styles.inputBox}>
        <TextInput
          style={{
            flex: 1,
            borderBottomColor: COLORS.primary,
            borderBottomWidth: 1,
            fontSize: 20,
            color: "black",
          }}
          placeholder="Merchant Code"
          placeholderTextColor={COLORS.darkgray}
          value={qrdata.MerchantId}
          keyboardType="numeric"
          editable={false}
        />
        <Ionicons
          name="qr-code-outline"
          size={40}
          color="black"
          onPress={() => navigation.navigate("QRCode")}
        />
      </View>
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
          value={qrdata.MerchantId && merchantName}
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
          value={qrdata.Amount}
          editable={false}
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
