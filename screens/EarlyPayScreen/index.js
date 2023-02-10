import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { COLORS } from "../../constants/theme";

const EarlyPayScreen = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(false);

  const data = [
    { label: "3 Month", value: "1" },
    { label: "6 Month", value: "2" },
    { label: "1 Year", value: "3" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Early Pay</Text>
        <View></View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.amount}>Amount</Text>
        <View
          style={[
            styles.amtContainer,
            isInputFocus && { borderColor: COLORS.secondary },
          ]}
        >
          <TextInput
            onChangeText={setAmount}
            value={amount}
            placeholder="Enter Amount"
            keyboardType="numeric"
            onFocus={() => setIsInputFocus(true)}
            onBlur={() => setIsInputFocus(false)}
          />
          <Text style={styles.currency}>ETB</Text>
        </View>
        <Text style={styles.limit}>Your available limit is 8500.00 ETB</Text>
        <Text style={styles.txtHeader}>Due Date</Text>
        <Dropdown
          style={[
            styles.dropdown,
            isFocus && { borderColor: COLORS.secondary },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.placeholderStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.iconStyle}
              color={isFocus ? COLORS.primary : COLORS.black}
              name="Safety"
              size={20}
            />
          )}
        />
        <Text style={styles.txtHeader}>Interest Rate</Text>
        <Text>15%</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.txt}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EarlyPayScreen;
