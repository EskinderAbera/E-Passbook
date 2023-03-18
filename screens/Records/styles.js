import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  recordsContainer: {
    flexGrow: 0.7,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
  },
  filterText: {
    color: COLORS.white,
    marginLeft: 15,
  },
  headerIcon: {
    flexDirection: "row",
    marginRight: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 12,
    // marginVertical: 15,
    // marginLeft: 10,
    // marginRight: 10,
    // margin: 10,
  },
});

export default styles;
