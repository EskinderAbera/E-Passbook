import { View } from "react-native";
import styles from "./styles";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const EarlyPay = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FAB
        icon="plus"
        style={styles.fab}
        color="white"
        cus
        onPress={() => navigation.navigate("EarlyPay")}
      />
    </View>
  );
};

export default EarlyPay;
