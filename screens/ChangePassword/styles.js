import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 15,
  },
  inputContainer: (isPasswordValid) => ({
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderColor: !isPasswordValid ? "red" : "black",
  }),
  input: {
    flex: 1,
  },
  btnContainer: (isConfirmDisabled) => ({
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: isConfirmDisabled ? "gray" : "#00adef",
  }),
  btnTxt: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    letterSpacing: 1,
  },
});

export default styles;
