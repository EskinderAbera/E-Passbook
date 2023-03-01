import styles from "./styles";
import { ListItem } from "react-native-elements";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import Item from "./Item";
import SkeletonItem from "./SkeletonItem";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";

const TransactionInfo = ({ accounts }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {}, []);
  return (
    <TouchableOpacity
      style={styles.transactionsList}
      onPress={() => setIsLoaded(!isLoaded)}
    >
      <ListItem>
        <ListItemContent>
          {!isLoaded
            ? accounts.statment.map((account) => {
                return <SkeletonItem account={account} key={account.TXNREF} />;
              })
            : accounts.statment.map((account) => {
                return <Item account={account} key={account.TXNREF} />;
              })}
        </ListItemContent>
      </ListItem>
    </TouchableOpacity>
  );
};
export default TransactionInfo;
