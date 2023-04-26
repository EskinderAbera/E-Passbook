import { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";
import HomeInfo from "../../components/HomeInfo";
import TransactionInfo from "../../components/TransactionInfo";
import Header from "../../components/Header";
import styles from "./styles";
import Animated from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import EarlyPay from "../../components/EarlyPay";
import Donation from "../../components/Donation";
import { useDispatch, useSelector } from "react-redux";
import { getDonations } from "../../store/Actions";

const AccountsDetail = ({ navigation, route }) => {
  const { accounts } = route.params;
  const { donations } = useSelector((state) => state?.donation);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const categories = ["Home", "Transaction", "Early-Pay", "Donations"];
  const [data, setData] = useState({
    home: true,
    transaction: false,
    earlyPay: false,
    donations: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDonations());
  }, []);

  const CategoryList = () => {
    const handleOnPress = (index) => {
      setSelectedCategoryIndex(index);
      if (index === 0) {
        setData({
          ...data,
          home: true,
          transaction: false,

          earlyPay: false,
          donations: false,
        });
      } else if (index === 1) {
        setData({
          ...data,
          home: false,
          transaction: true,
          earlyPay: false,
          donations: false,
        });
      } else if (index === 2) {
        setData({
          ...data,
          transaction: false,
          home: false,
          earlyPay: true,
          donations: false,
        });
      } else {
        setData({
          ...data,
          earlyPay: false,
          transaction: false,
          home: false,
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
                      width: index !== 0 ? 70 : 40,
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
        <View style={{ height: "100%", display: "flex" }}>
          {data.home && <HomeInfo navigation={navigation} />}
          {/* {data.account && (
            <AccountInfo navigation={navigation} accounts={accounts} />
          )} */}
          {data.transaction && (
            <TransactionInfo navigation={navigation} accounts={accounts} />
          )}
          {data.earlyPay && <EarlyPay />}
          {data.donations && (
            <View style={styles.donationContainer}>
              {donations.map((donation, index) => (
                <Donation
                  key={index}
                  imageSource={donation.imageUrl}
                  title={donation.title}
                  percent={donation.totalAmountCollected / donation.goalAmount}
                  donationRaised={donation.totalAmountCollected}
                  hoursLeft={donation.campaignDurationLeft}
                  shortDescription={donation.shortDescription}
                  campaignId={donation.campaignId}
                />
              ))}
            </View>
          )}
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default AccountsDetail;
