import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  recordsContainer: {
    flexDirection: "row",
    margin: 12,
  },
  categoryContainer: {
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center",
  },
  balanceContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1,
  },
  divider: {
    color: "black",
  },
  incomeBalance: {
    color: COLORS.green,
  },
  expenseBalance: {
    color: COLORS.red,
  },
});

export default styles;
