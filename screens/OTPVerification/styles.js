import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    padding: 20,
  },
  codeFiledRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: COLORS.chineseSilver,
    borderBottomWidth: 1,
  },
  cellText: {
    color: COLORS.black,
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 2,
  },
  root: {
    minHeight: 800,
    padding: 20,
    textAlign: "center",
  },
  title: {
    paddingTop: 50,
    color: COLORS.black,
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: "auto",
    marginRight: "auto",
  },
  subTitle: {
    paddingTop: 30,
    color: COLORS.black,
    textAlign: "center",
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "700",
  },
  otpText: {
    marginLeft: 15,
    color: COLORS.primary,
    fontSize: 18,
    lineHeight: 22,
  },
});

export default styles;
