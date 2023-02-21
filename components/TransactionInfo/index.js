import { View } from "react-native";
import styles from "./styles";
import { ListItem } from "react-native-elements";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import Item from "./Item";
// import Skeleton from "../Skeleton";
import SkeletonItem from "./SkeletonItem";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const TransactionInfo = ({ accounts }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // return accounts.statment.map((account) => <Skeleton />);
  return (
    // <View style={styles.transactionsList}>
    //   <ListItem>
    //     <ListItemContent>

    //     </ListItemContent>
    //   </ListItem>
    // </View>
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
