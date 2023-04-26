import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  RefreshControl,
} from "react-native";
import ShowBalance from "../../components/ShowBalance";
import styles from "./styles";
import SetPrimaryAccount from "../../components/SetPrimaryAccount";
import Carousel from "react-native-reanimated-carousel";
import HomeSkeleton from "../../components/HomeSkeleton/index";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import AccountsAction from "../../store/Actions/AccountsAction";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserInfoAction from "../../store/Actions/UserInfoAction";

const HomeScreen = ({ navigation }) => {
  const loadAccounts = useSelector((state) => state.accounts);
  const [refreshing, setRefreshing] = React.useState(false);
  const width = Dimensions.get("window").width;
  const dispatch = useDispatch();
  const products = [
    {
      image: require("../../assets/icons/michu.png"),
    },
    {
      image: require("../../assets/icons/sinqee.png"),
    },
    {
      image: require("../../assets/icons/farmer.png"),
    },
  ];

  const getAccounts = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
      if (value !== null) {
        dispatch(AccountsAction(value));
        dispatch(UserInfoAction(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAccounts();
    return () => setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Carousel
          width={width}
          autoPlay={true}
          data={products}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.slide} key={index}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.accountContainer}>
        <View style={styles.innerAccountContainer}>
          <Text style={styles.accountText}>Your Payment Credentials</Text>
          <SetPrimaryAccount />
        </View>
        <View style={styles.innerAccountContainer}>
          <Text style={styles.accountText}>Your Account</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getAccounts} />
        }
      >
        {loadAccounts?.isLoaded ? (
          Array.from("coopass").map((acc, index) => (
            <HomeSkeleton key={index} />
          ))
        ) : loadAccounts?.accounts?.accounts?.length > 0 ? (
          loadAccounts?.accounts?.accounts?.map((accountsf) => {
            return (
              <ShowBalance
                navigation={navigation}
                key={accountsf.accountId}
                accountsf={accountsf}
              />
            );
          })
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>You don't have account!</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
