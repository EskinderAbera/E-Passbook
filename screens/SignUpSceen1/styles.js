import { StyleSheet, Platform } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderLeftColor: COLORS.white,
    borderRightColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text_header: {
    color: COLORS.black,
    // fontWeight: "bold",
    fontSize: 20,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signin: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginTop: 15,
  },
  textSign: {
    fontSize: 18,
    color: COLORS.white,
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "gray",
  },
  errorMsg: {
    color: COLORS.red,
    fontSize: 14,
  },
  callingArea: {
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  countryFlag: { justifyContent: "center", marginLeft: 5 },
  callingCode: { justifyContent: "center", marginLeft: 5 },
  phoneNumber: {
    flex: 1,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
    height: 40,
    color: "#05375a",
    lineHeight: 22,
    fontSize: 16,
  },
  animatable: { flexDirection: "row", alignItems: "center" },
});

export default styles;
