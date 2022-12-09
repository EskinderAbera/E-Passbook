import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    padding: 20,
    margin: 10,
    marginVertical: 10,
    width: "90%",

    borderRadius: 15,
  },
  details: {
    flex: 1,
    flexDirection: "row",
    bottom: 10,
  },
  visible: {
    color: COLORS.white,
    fontSize: 15,
    fontweight: "bold",
    marginLeft: 23,
    marginRight: 10,
  },
  coopLogo: {
    width: 70,
    height: 40,
    left: 0,
    bottom: 4,
  },
  bankDetail: {
    color: COLORS.white,
    fontSize: 16,
    left: 20,
  },
  balanceContainer: { color: COLORS.white, fontSize: 16 },
  container: { flexDirection: "row", top: 15 },
  balanceText: {
    color: COLORS.white,
    marginLeft: 20,
    fontSize: 15,
  },
  balanceVisibility: { flexDirection: "row" },
  eyeIcon: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 12,
    margin: 10,
  },
  accountContainer: { marginLeft: 40 },
  accountText: {
    color: COLORS.white,
    fontSize: 15,
  },
  accountNumber: {
    color: COLORS.white,
    fontSize: 15,
    fontweight: "bold",
  },
});

export default styles;
