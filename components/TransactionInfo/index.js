import styles from "./styles";
import { ListItem } from "react-native-elements";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import Item from "./Item";
import SkeletonItem from "./SkeletonItem";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionsAction from "../../store/Actions/TransactionsAction";

const TransactionInfo = ({ accounts }) => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TransactionsAction(accounts.accountNumber));
  }, []);

  return (
    <TouchableOpacity style={styles.transactionsList}>
      <ListItem>
        <ListItemContent>
          {transactions.isLoaded ? (
            <SkeletonItem />
          ) : transactions.statements.statement.length > 0 ? (
            transactions.statements.statement.map((account, index) => {
              return <Item account={account} key={index} />;
            })
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>You don't have transactions!</Text>
            </View>
          )}
        </ListItemContent>
      </ListItem>
    </TouchableOpacity>
  );
};
export default TransactionInfo;
