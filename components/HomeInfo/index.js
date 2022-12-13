import { View, TouchableOpacity, SafeAreaView } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem } from "react-native-elements";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef, useState } from "react";
import BottomContent from "./BottomContent";

const HomeInfo = ({ navigation }) => {
  const [data, setData] = useState({ isClicked: "false", type: "" });

  const refRBSheet = useRef();

  const Line = () => <View style={styles.line} />;

  return (
    <SafeAreaView style={styles.container}>
      <RBSheet
        ref={refRBSheet}
        height={500}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(33, 26, 27, 0.35)",
          },
          draggableIcon: {
            backgroundColor: "orange",
          },
        }}
      >
        {data.isClicked && <BottomContent type={data.type} />}
      </RBSheet>
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
            setData({ ...data, isClicked: true, type: "ATM" });
            refRBSheet.current.open();
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
        <Line />
        <TouchableOpacity
          // onPress={() => {
          //   refRBSheet.current.open();
          // }}
          onPress={() => {
            setData({ ...data, isClicked: true, type: "product" });
            refRBSheet.current.open();
          }}
        >
          <ListItem>
            <AntDesign name="plus" size={28} color={COLORS.primary} />
            <ListItem.Content>
              <ListItem.Title>New Product</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeInfo;
