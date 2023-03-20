import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import { chooseAccount, chooseReceiverAccount } from "../../store/Actions";
import { accounts } from "../../constants/data";
import styles from "./styles";

const AccountChooser = ({ navigation, route }) => {
  const { type } = route.params;
  const { accounts } = useSelector((state) => state.expense);
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
      {accounts.map((account, index) => (
        <TouchableOpacity
          onPress={() => handleAccountChange(account.name)}
          style={styles.accountContainer}
          key={index}
        >
          <View style={styles.iconContainer}>
            <FontAwesome name="coins" size={23} color="#fff" />
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              {account.name.toLowerCase() === "cash"
                ? account.name
                : `Account ${index}`}
            </Text>
            <Text style={{ fontSize: 15 }}>{account.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AccountChooser;
