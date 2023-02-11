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
    marginTop: 20,
  },
  innerAccountContainer: {
    flexDirection: "column",
    marginVertical: 14,
  },
  accountText: {
    fontSize: 20,
    color: COLORS.black,
  },

  sliderContainer: {
    height: 200,
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
});

export default styles;
