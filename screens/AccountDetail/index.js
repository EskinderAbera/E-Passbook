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
import Donation from "../../components/Donation";

const AccountsDetail = ({ navigation, route }) => {
  // const { accounts } = route.params;
  const accounts = { product: "product", openingDate: "date" }
  const donations = [{
    "campaignId": 359,
    "title": "New",
    "shortDescription": "ect and pre-launch pages. Potential backers will also see them if your project appears on category pages, se",
    "city": "addis",
    "imageUrl": "http://res.cloudinary.com/do394twgw/image/upload/v1676624263/o7zxj3m6fmvpoye2y3pt.jpg",
    "goalAmount": 5000.0,
    "owner": "hunda@gmail.com",
    "projectType": "businness",
    "campaignDuration": 30,
    "raised_amount": 450.0,
    "timeLeft": 14
  }]
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const categories = ["Home", "Account", "Transaction", "Early-Pay", "Donations"];
  const [data, setData] = useState({
    home: true,
    transaction: false,
    account: false,
    earlyPay: false,
    donations: false,
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
          donations: false,
        });
      } else if (index === 1) {
        setData({
          ...data,
          account: true,
          home: false,
          transaction: false,
          earlyPay: false,
          donations: false,
        });
      } else if (index === 2) {
        setData({
          ...data,
          transaction: true,
          home: false,
          account: false,
          earlyPay: false,
          donations: false,
        });
      } else if (index === 3) {
        setData({
          ...data,
          earlyPay: true,
          transaction: false,
          home: false,
          account: false,
          donations: false,
        });
      } else {
        setData({
          ...data,
          earlyPay: false,
          transaction: false,
          home: false,
          account: false,
          donations: true,
        });
      }
    };
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                      marginHorizontal: 10,
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="#00adef" style="light" />
      <Animated.View>
        <Header navigation={navigation} accounts={accounts} />
        <View>
          <CategoryList />
        </View>
        <View style={{ height: "100%", display: 'flex' }}>
          {data.home && <HomeInfo navigation={navigation} />}
          {data.account && (
            <AccountInfo navigation={navigation} accounts={accounts} />
          )}
          {data.transaction && (
            <TransactionInfo navigation={navigation} accounts={accounts} />
          )}
          {data.earlyPay && <EarlyPay />}
          {data.donations &&
            donations.map((donation, index) => (
              <Donation
                key={index}
                imageSource={donation.imageUrl}
                title={donation.title}
                percent={donation.raised_amount / donation.goalAmount}
                donationRaised={donation.raised_amount}
                hoursLeft={donation.timeLeft}
              />
            ))
          }
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default AccountsDetail;
