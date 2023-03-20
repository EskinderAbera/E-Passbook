import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionic from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const AccountHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="arrow-back" color="#fff" size={30} />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 18, marginLeft: 8 }}>
          Account
        </Text>
      </View>
      <TouchableOpacity>
        <Ionic name="settings" color="#fff" size={27} />
      </TouchableOpacity>
    </View>
  );
};

export default AccountHeader;
