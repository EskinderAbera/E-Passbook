import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

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
  bodyContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  amount: {
    fontSize: 15,
  },
  amtContainer: {
    flexDirection: "row",
    marginVertical: 10,
    borderColor: COLORS.black,
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  btnContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  applyBtn: {
    padding: 10,
    backgroundColor: COLORS.primary,
    width: "90%",
  },
  txt: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: "400",
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "column",
  },
});

export default styles;
