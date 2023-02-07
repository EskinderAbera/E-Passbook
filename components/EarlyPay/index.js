import { View, Text } from "react-native";
import styles from "./styles";
import { FAB } from "react-native-paper";

const EarlyPay = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>

      <FAB
        icon="plus"
        style={styles.fab}
        color="white"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

export default EarlyPay;
