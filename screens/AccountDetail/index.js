import { useState, createRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import { COLORS } from "../../constants/theme";
import HomeInfo from "../../components/HomeInfo";
import AccountInfo from "../../components/AccountInfo";
import TransactionInfo from "../../components/TransactionInfo";
import Header from "../../components/Header";
import styles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

const AccountsDetail = ({ navigation, route }) => {
  const { accounts } = route.params;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const categories = ["Home", "Account Info", "Transaction"];
  const [data, setData] = useState({
    home: true,
    transaction: false,
    account: false,
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isChanged, setIsChanged] = useState("");
  const [isBottomSheet, setIsBottomSheet] = useState(false);

  const CategoryList = () => {
    const handleOnPress = (index) => {
      setSelectedCategoryIndex(index);
      if (index === 0) {
        setData({ ...data, home: true, transaction: false, account: false });
      } else if (index === 1) {
        setData({ ...data, account: true, home: false, transaction: false });
      } else {
        setData({
          ...data,
          transaction: true,
          home: false,
          account: false,
        });
      }
    };
    return (
      <View style={styles.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => handleOnPress(index)}
          >
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.primary
                      : COLORS.grey,
                }}
              >
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: index === 0 ? 40 : 90,
                    backgroundColor: COLORS.primary,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const StartDates = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);

    setStartDate(currentDate);
  };

  const EndDates = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setEndDate(currentDate);
  };

  const showDatepicker = (props) => {
    setIsChanged(props);
    setShow(true);
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Choose Date</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <Text style={styles.text_footer}>Email</Text>
      <View style={styles.action}>
        <Entypo name="email" color="#A9A9A9" size={20} />
        <TextInput
          placeholder="Your Email"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
      </View>
      <Text style={[styles.text_footer, { marginTop: 35 }]}>Start date</Text>
      <TouchableOpacity onPress={() => showDatepicker("startDate")}>
        <View style={styles.action}>
          <TextInput
            editable={false}
            selectTextOnFocus={false}
            style={styles.textInput}
            value={startDate.toLocaleString()}
          />
          <FontAwesome name="sort-down" color="#A9A9A9" size={20} />
        </View>
      </TouchableOpacity>
      <Text
        style={[
          styles.text_footer,
          {
            marginTop: 35,
          },
        ]}
      >
        End date
      </Text>
      <TouchableOpacity onPress={() => showDatepicker("endDate")}>
        <View style={styles.action}>
          <TextInput
            editable={false}
            selectTextOnFocus={false}
            style={styles.textInput}
            value={endDate.toLocaleString()}
          />
          <FontAwesome name="sort-down" color="#A9A9A9" size={20} />
        </View>
      </TouchableOpacity>
      <View style={styles.button}>
        <TouchableOpacity style={styles.signIn}>
          <LinearGradient colors={["#00abef", "#00adef"]} style={styles.signIn}>
            <Text
              style={[
                styles.textSign,
                {
                  color: "#fff",
                },
              ]}
            >
              Send
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = createRef();
  let fall = new Animated.Value(1);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[500, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        style={{ backgroundColor: "red" }}
      />

      <Animated.View
        style={{
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}
      >
        <Header navigation={navigation} accounts={accounts} />
        <View>
          <CategoryList />
        </View>
        <View style={{ height: "100%" }}>
          {data.home && (
            <HomeInfo
              navigation={navigation}
              bs={bs}
              // setIsBottomSheet={setIsBottomSheet}
            />
          )}
          {data.account && (
            <AccountInfo navigation={navigation} accounts={accounts} />
          )}
          {data.transaction && (
            <TransactionInfo navigation={navigation} accounts={accounts} />
          )}
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="date"
            is24Hour={true}
            onChange={isChanged === "startDate" ? StartDates : EndDates}
          />
        )}
      </Animated.View>
    </ScrollView>
  );
};

export default AccountsDetail;
