import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";
import HomeInfo from "../../components/HomeInfo";
import AccountInfo from "../../components/AccountInfo";
import TransactionInfo from "../../components/TransactionInfo";
import Header from "../../components/Header";
import styles from "./styles";
import Animated from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import EarlyPay from "../../components/EarlyPay";
import EarlyPayModal from "../../components/EarlyPayModal";

const AccountsDetail = ({ navigation, route }) => {
  const { accounts } = route.params;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const categories = ["Home", "Account", "Transaction", "Early-Pay"];
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    home: true,
    transaction: false,
    account: false,
    earlyPay: false,
  });

  const CategoryList = () => {
    const handleOnPress = (index) => {
      setSelectedCategoryIndex(index);
      if (index === 0) {
        setData({
          ...data,
          home: true,
          transaction: false,
          account: false,
          earlyPay: false,
        });
      } else if (index === 1) {
        setData({
          ...data,
          account: true,
          home: false,
          transaction: false,
          earlyPay: false,
        });
      } else if (index === 2) {
        setData({
          ...data,
          transaction: true,
          home: false,
          account: false,
          earlyPay: false,
        });
      } else {
        setData({
          ...data,
          earlyPay: true,
          transaction: false,
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
                    width: index === 2 ? 90 : 40,
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="#00adef" style="light" />
      {showModal && <EarlyPayModal onPress={() => setShowModal(false)} />}
      <Animated.View>
        <Header navigation={navigation} accounts={accounts} />
        <View>
          <CategoryList />
        </View>
        <View style={{ height: "100%" }}>
          {data.home && <HomeInfo navigation={navigation} />}
          {data.account && (
            <AccountInfo navigation={navigation} accounts={accounts} />
          )}
          {data.transaction && (
            <TransactionInfo navigation={navigation} accounts={accounts} />
          )}
          {data.earlyPay && <EarlyPay />}
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default AccountsDetail;
