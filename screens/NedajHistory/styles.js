import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Totalcontainer: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    padding: 10,
  },
  container: {
    flexDirection: "row",
    // marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  recordTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "500",
  },
  icon: {
    marginRight: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
    paddingBottom: 3,
  },
  row: {
    flexDirection: "row",
    // marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default styles;
