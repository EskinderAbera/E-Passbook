import { View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";
import { COLORS } from "../../constants/theme";
import { Divider } from "react-native-elements";

const Item = ({ account }) => {
  return (
    <View
      style={{
        paddingBottom: 8,
      }}
    >
      <View style={styles.transactions}>
        <View style={styles.transactionDetails}>
          <Feather
            name={account.cramt > 0 ? "arrow-up-right" : "arrow-down-left"}
            size={30}
            color={account.cramt > 0 ? COLORS.primary : COLORS.red}
          />
          <View style={styles.accountDateView}>
            <Text>{account.txnref}</Text>
            <Text style={styles.accountDate}>{account.date}</Text>
          </View>
        </View>
        <View style={styles.txn}>
          <Text>{account.cramt > 0 ? account.cramt : account.dramt}</Text>
          <Text
            style={{
              color: account.cramt > 0 ? COLORS.primary : COLORS.red,
            }}
          >
            {account.cramt > 0 ? "Cr" : "Dr"}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default Item;
