import { View } from "react-native";
import styles from "./styles";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useStateContext } from "../../Contexts/ContextProvider";

const EarlyPay = () => {
  const navigation = useNavigation();
  const { apply } = useStateContext();
  return (
    <View style={styles.container}>
      <FAB
        icon="plus"
        style={[styles.fab, !apply && { backgroundColor: "#dddd" }]}
        color="white"
        cus
        onPress={() => (apply ? navigation.navigate("EarlyPay") : null)}
      />
    </View>
  );
};

export default EarlyPay;
