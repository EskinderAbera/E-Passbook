import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  transactionsList: {
    marginTop: 10,
    width: "100%",
  },
  transactions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    padding: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  transactionDetails: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor: "#ddd",
  },
  accountDateView: { marginLeft: 5 },
  accountDate: { color: COLORS.darkgray, marginTop: 3 },
  txn: { flexDirection: "column", alignItems: "center" },
});

export default styles;
