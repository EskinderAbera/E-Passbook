import { View, TouchableOpacity, SafeAreaView } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem } from "react-native-elements";
import { COLORS } from "../../constants/theme";
import styles from "./styles";

const HomeInfo = ({ navigation, bs }) => {
  const Line = () => <View style={styles.line} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("OTPVerification", {
              Phonenumber: "919584347",
              type: "ATM",
            })
          }
        >
          <ListItem>
            <AntDesign name="creditcard" size={28} color={COLORS.primary} />
            <ListItem.Content>
              <ListItem.Title>Request ATM Card</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
        <Line />
        <TouchableOpacity
          onPress={() => {
            bs.current.snapTo(0);
          }}
        >
          <ListItem>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={28}
              color={COLORS.primary}
            />
            <ListItem.Content>
              <ListItem.Title>Request Account Statement</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
        <Line />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("OTPVerification", {
              Phonenumber: "919584347",
              type: "Cash",
            })
          }
        >
          <ListItem>
            <MaterialCommunityIcons
              name="cash-multiple"
              size={28}
              color={COLORS.primary}
            />
            <ListItem.Content>
              <ListItem.Title>Cardless Cash</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
        <Line />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("OTPVerification", {
              Phonenumber: "919584347",
              type: "Pin",
            })
          }
        >
          <ListItem>
            <AntDesign name="pushpino" size={28} color={COLORS.primary} />
            <ListItem.Content>
              <ListItem.Title>ATM Pin Change</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeInfo;
