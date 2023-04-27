import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#00adef",
    marginLeft: 15,
    padding: 10,
    borderRadius: 15,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceTitle: {
    color: "white",
    fontSize: 15,
  },
  accountTitle: {
    marginLeft: "auto",
    color: "white",
    fontSize: 15,
  },
  details: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  coopLogo: {
    width: 70,
    height: 40,
  },
  bankDetail: {
    color: COLORS.white,
    fontSize: 16,
    left: 20,
    marginLeft: "auto",
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  balance: {
    marginRight: 10,
    color: "white",
  },
  acctNo: {
    marginLeft: "auto",
    color: "white",
  },
});

export default styles;
