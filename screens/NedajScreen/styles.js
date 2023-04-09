import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
  },
  container1: {
    flex: 1,
  },
  inputBox: {
    flexDirection: "row",
    margin: 10,
  },
});

export default styles;
