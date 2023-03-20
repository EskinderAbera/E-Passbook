import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { accounts } from "../../constants/data";

const NewAccount = ({ navigation }) => {
  const [value, setValue] = React.useState(null);
  const [accountName, setAccountName] = React.useState(null);
  const [accountNumber, setAccountNumber] = React.useState(null);
  const [initialValue, setInitialValue] = React.useState(null);

  const handleCheck = () => {
    if (value && accountName && accountNumber && initialValue) {
      const newAccount = { id: 4, name: accountName, amount: initialValue };
      accounts.push(newAccount);
      console.warn(accounts);
      //   navigation.goBack();
    } else {
      console.log(accountName, value, accountNumber, initialValue);
    }
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons
          name="check"
          size={24}
          color="white"
          style={{ marginRight: 15 }}
          onPress={handleCheck}
        />
      ),
    });
  }, [navigation, handleCheck]);

  return (
    <View style={styles.accountContainer}>
      <Text>Account Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAccountName}
        value={accountName}
      />
      <Text style={{ marginTop: 15 }}>Bank Account Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAccountNumber}
        value={accountNumber}
        keyboardType={"number-pad"}
      />
      <Text style={{ marginTop: 15 }}>Type</Text>
      <Dropdown
        style={[styles.dropdown, styles.input]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
      />
      <Text style={{ marginTop: 15 }}>Initial Value</Text>
      <TextInput
        style={styles.input}
        keyboardType={"number-pad"}
        onChangeText={setInitialValue}
        value={initialValue}
      />
    </View>
  );
};

export default NewAccount;

const data = [
  { label: "General", value: "1" },
  { label: "Cash", value: "2" },
  { label: "Current Account", value: "3" },
  { label: "Saving Account", value: "4" },
  { label: "Loan", value: "5" },
  { label: "Mortgage", value: "6" },
  { label: "Investment", value: "7" },
];
