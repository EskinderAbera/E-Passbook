import { View, TouchableOpacity, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { useStateContext } from "../Contexts/ContextProvider";

const ImageViewer = ({ route }) => {
  const { invoker, type } = route.params;
  const navigation = useNavigation();
  const { setApply } = useStateContext();

  return type ? (
    <View style={styles.earlyContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Photo Confirmation</Text>
        <View></View>
      </View>
      <View style={styles.bodyContainer}>
        <Image
          source={{ uri: "data:image/jpeg;base64," + invoker }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.applyBtn}
          onPress={() => {
            setApply(true);
            navigation.goBack();
          }}
        >
          <Text style={styles.txt}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <Image
        source={{ uri: "data:image/jpeg;base64," + invoker }}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  earlyContainer: {
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
};

export default ImageViewer;
