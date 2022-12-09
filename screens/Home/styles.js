import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/theme";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
    position: "relative",
  },
  innerContainer: {
    width: "100%",
    backgroundColor: COLORS.backgroundLight,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  productContainer: {
    width: width,
    height: 230,
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: "200%",
    height: "100%",
    resizeMode: "contain",
  },
  accountContainer: {
    paddingHorizontal: 16,
    marginTop: 6,
  },
  innerAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
  accountText: {
    fontSize: 20,
    color: COLORS.black,
  },
});

export default styles;
