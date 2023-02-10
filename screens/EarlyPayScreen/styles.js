import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
    padding: 10,
  },
  headerText: {
    alignSelf: "flex-start",
    color: "white",
    fontSize: 17,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  btnContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  applyBtn: {
    padding: 10,
    backgroundColor: COLORS.primary,
    width: "90%",
  },
  txt: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: "700",
  },
  amount: {
    fontSize: 15,
  },
  amtContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    borderColor: COLORS.black,
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  txtHeader: {
    marginTop: 20,
    fontSize: 15,
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  limit: {
    marginTop: 7,
    color: COLORS.secondary,
  },
  currency: {
    alignSelf: "center",
    color: "#aaaf",
  },
});

export default styles;
