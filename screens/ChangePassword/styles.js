import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#00adef",
  },
  btnContainer: (disable) => ({
    alignSelf: "center",
    height: 40,
    width: "80%",
    backgroundColor: disable ? COLORS.darkgray : COLORS.primary,
    justifyContent: "center",
    borderRadius: 10,
  }),
  btnTxt: {
    color: "white",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
