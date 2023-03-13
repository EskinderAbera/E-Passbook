import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    height: 210,
    width: "100%",
  },
  title: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  progressBar: {
    flex: 1,
    height: 8,
    borderRadius: 8,
    backgroundColor: "lightgray",
  },
  progress: {
    height: 8,
    borderRadius: 8,
    backgroundColor: "green",
  },
  progressText: {
    marginLeft: 8,
  },
  rowContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  donationRaised: {
    fontSize: 16,
  },
  donationText: {
    fontSize: 16,
    fontWeight: "500",
  },
  hoursLeft: {
    fontSize: 16,
    color: "#aaa",
  },
  centeredView: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "rgba(33,26,27,0.35)",
  },
  modalContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    width: "80%",
    alignItems: "center",
  },
  donateText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#00ADEF",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 9,
    marginVertical: 8,
  },
  buttonContainer:{
    alignItems: "center",
    justifyContent: "center",
  },
  cta: {
    backgroundColor: "#00ADEF",
    padding: 10,
    borderRadius:5,
    marginVertical: 10,
  }
});

export default styles;
