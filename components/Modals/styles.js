import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    elevation: 20,
  },
  btnTxt: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    letterSpacing: 1,
  },
});

export default styles;
