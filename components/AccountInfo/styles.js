import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listContainer: { flex: 1, width: "100%" },
  innerContainer: { flexDirection: "row", marginTop: 15 },
  titleContainer: { marginLeft: 20 },
  margin: {
    marginTop: 15,
    marginBottom: 5,
  },
  accountView: { flexDirection: "column" },
  opening: { flexDirection: "column" },
  userInfoSection: {
    // paddingHorizontal: 30,
    marginBottom: 25,
  },
  menuWrapper: {
    marginTop: 10,
    width: "100%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 20,
  },
  address: { flexDirection: "column" },
});

export default styles;
