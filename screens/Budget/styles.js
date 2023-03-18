import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  fabContainer: {
    position: "absolute",
    // bottom: 20,
    // right: 10,
    flex: 1,
    // aspectRatio: 1,
  },
  fab: {
    backgroundColor: COLORS.primary,
  },
  topCard: {
    backgroundColor: "white",
    flexGrow: 0.1,
    borderRadius: 8,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 17,
  },
  iconContainer: {
    marginRight: 10,
    padding: 5,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    borderColor: "gray",
  },
  accountsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 20,
  },
  accounts: {
    backgroundColor: "aqua",
    width: "40%",
    height: 45,
    borderRadius: 5,
    margin: 5,
    marginLeft: 15,
    flexDirection: "column",
    paddingLeft: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    margin: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  recordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  recordTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  recordSubtitle: {
    margin: 10,
  },
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
  buttonContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  buttontxt: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
