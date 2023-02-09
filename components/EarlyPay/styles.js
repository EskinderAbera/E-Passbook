import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/theme";

// let height = Dimensions.get("screen").height;
// console.log(height);
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 550,
    backgroundColor: COLORS.primary,
  },
});

export default styles;
