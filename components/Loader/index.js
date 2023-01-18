import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";

const Loading = ({ msg }) => {
  return (
    <View style={styles.loader}>
      <Text style={styles.headerText}>{msg}</Text>
      <ActivityIndicator size={"large"} color={"#00adef"} />
    </View>
  );
};

export default Loading;
