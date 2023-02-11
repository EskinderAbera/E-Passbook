import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  group: {
    marginBottom: 2,
    paddingBottom: 5,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#E48525",
    width: "90%",
  },
  selectedMember: {
    backgroundColor: "#00ADEF",
    marginTop: 5,
    marginBottom: 7,
    padding: 3,
  },
  amtContainer: {
    flexDirection: "row",
    borderColor: COLORS.black,
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  btnContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  applyBtn: {
    padding: 8,
    backgroundColor: COLORS.primary,
    width: "100%",
    marginTop: 10,
  },
  txt: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: "400",
  },
  amount: {
    fontSize: 15,
  },
});

export default styles;
