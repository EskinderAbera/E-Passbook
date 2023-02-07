import { StyleSheet, Dimensions } from "react-native";

let height = Dimensions.get("screen").height;
console.log(height);
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 500,
    color: "#00adef",
    // height: "100%",
    // bottom: 120,
  },
});

export default styles;
