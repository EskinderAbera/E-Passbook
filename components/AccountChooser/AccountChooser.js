import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useDispatch } from "react-redux";
import { chooseAccount, chooseReceiverAccount } from "../../store/Actions";
import styles from "./styles";

const AccountChooser = ({ navigation, route }) => {
  const { Accounts, type } = route.params;
  const dispatch = useDispatch();
  const handleAccountChange = (account) => {
    if (type === "normal") {
      dispatch(chooseAccount(account));
    } else {
      dispatch(chooseReceiverAccount(account));
    }
    navigation.navigate("ExpenseTracker");
  };

  return (
    <View style={styles.container}>
      {Accounts.map((account, index) => (
        <TouchableOpacity
          onPress={() => handleAccountChange(account.name)}
          style={styles.accountContainer}
          key={index}
        >
          <View style={styles.iconContainer}>
            <FontAwesome name="coins" size={23} color="#fff" />
          </View>
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {account.name}
            </Text>
            <Text style={{ fontSize: 13, textAlign: "center" }}>
              {account.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AccountChooser;
