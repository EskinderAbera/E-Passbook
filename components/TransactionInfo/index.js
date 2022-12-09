import { View } from "react-native";
import styles from "./styles";
import { ListItem } from "react-native-elements";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import Item from "./Item";

const TransactionInfo = ({ accounts }) => {
  return (
    <View style={styles.transactionsList}>
      <ListItem>
        <ListItemContent>
          {accounts.statment.map((account) => {
            return <Item account={account} key={account.TXNREF} />;
          })}
        </ListItemContent>
      </ListItem>
    </View>
  );
};
export default TransactionInfo;
