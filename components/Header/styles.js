import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  background: {
    height: 200,
  },
  bannerView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
  },
  accountContainer: {
    flex: 1,
    flexDirection: "column",
  },
  innerAccount: {
    flexDirection: "row",
    marginBottom: 8,
  },
  header: {
    color: COLORS.white,
    marginTop: 15,
    marginLeft: 20,
    fontSize: 15,
  },
  visible: {
    color: COLORS.white,
    fontSize: 15,
    fontweight: "bold",
    marginLeft: 23,
    marginTop: 5,
  },
  saving: {
    position: "absolute",
    right: 0,
    justifyContent: "flex-end",
    color: COLORS.white,
    fontSize: 20,
    fontweight: "1500",
    marginRight: 20,
  },
  // productText: {
  //   flexDirection: "row",
  // },
  accountNo: {
    color: COLORS.white,
    marginLeft: 20,
    marginTop: 3,
    fontSize: 17,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  balanceText: { marginRight: 10 },
  fullName: {
    position: "absolute",
    bottom: 10,
    color: COLORS.white,
    margin: 15,
    fontweight: "900",
    fontSize: 15,
  },
  qr: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 10,
    marginBottom: 8,
  },

  // newHeader
  textContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textName: { fontSize: 25, marginBottom: 15, fontStyle: "bold" },
});

export default styles;
