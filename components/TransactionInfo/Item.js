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
            name={account.CRAMT > 0 ? "arrow-up-right" : "arrow-down-left"}
            size={30}
            color={account.CRAMT > 0 ? COLORS.primary : "red"}
          />
          <View style={styles.accountDateView}>
            <Text>{account.TXNREF}</Text>
            <Text style={styles.accountDate}>{account.DATE}</Text>
          </View>
        </View>
        <View style={styles.txn}>
          <Text>{account.CRAMT > 0 ? account.CRAMT : account.DRAMT}</Text>
          <Text
            style={{
              color: account.CRAMT > 0 ? COLORS.primary : "red",
            }}
          >
            {account.CRAMT > 0 ? "Cr" : "Dr"}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default Item;
