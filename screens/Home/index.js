import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import ShowBalance from "../../components/ShowBalance";
import styles from "./styles";
import SetPrimaryAccount from "../../components/SetPrimaryAccount";
import Carousel from "react-native-reanimated-carousel";
import HomeSkeleton from "../../components/HomeSkeleton/index";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AccountsAction from "../../store/Actions/AccountsAction";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const loadAccounts = useSelector((state) => state.accounts);
  const [phoneNumber, setPhoneNumber] = useState("");
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

  useEffect(() => {
    const getPhone = async () => {
      try {
        const value = await AsyncStorage.getItem("phone");

        if (value !== null) {
          setPhoneNumber(value);
        }
      } catch (e) {
        setPhoneNumber("");
      }
    };
    getPhone();
  }, []);

  useEffect(() => {
    if (Array.from(phoneNumber)) dispatch(AccountsAction(phoneNumber));
  }, [phoneNumber]);

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
      <ScrollView>
        {loadAccounts.isLoaded
          ? Array.from("coopass").map((acc, index) => (
              <HomeSkeleton key={index} />
            ))
          : loadAccounts.accounts.accounts.map((accountsf) => {
              return (
                <ShowBalance
                  navigation={navigation}
                  key={accountsf.accountId}
                  accountsf={accountsf}
                />
              );
            })}
      </ScrollView>
    </View>
  );
};

export default Home;
