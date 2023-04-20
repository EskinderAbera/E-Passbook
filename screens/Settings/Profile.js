import React, { useEffect, useState } from "react";
import { Card, Icon } from "react-native-elements";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Email from "./Email";
import Separator from "./Separator";
import Tel from "./Tel";
import Password from "./Password";
import Shares from "./Share";
import ContactUs from "./ContactUs";
import Logout from "./Logout";
import { useStateContext } from "../../Contexts/ContextProvider";
import Security from "./Security";
import * as SecureStore from "expo-secure-store";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF",
    borderWidth: 0,
    flex: 1,
    marginTop: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: "center",
      },
    }),
  },
  placeIcon: {
    color: "white",
    fontSize: 26,
  },
  scroll: {
    backgroundColor: "#FFF",
  },
  telContainer: {
    backgroundColor: "yellow",
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  userCityRow: {
    backgroundColor: "transparent",
  },
  userCityText: {
    color: "#A5A5A5",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  userImage: {
    borderColor: "#FFF",
    borderRadius: 85,
    borderWidth: 3,
    height: 140,
    marginBottom: 15,
    width: 140,
  },
  userNameText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center",
  },
});

const Profile = ({ navigation }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [showSecurity, setShowSecurity] = useState(false);

  useEffect(() => {
    async function getValueForBiometric() {
      let result = await SecureStore.getItemAsync("isBiometric");
      if (result) {
        if (result === "true") {
          setShowSecurity(true);
        } else {
          setShowSecurity(false);
        }
      }
    }
    getValueForBiometric();
  }, []);
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerBackgroundImage}>
              <View style={styles.headerColumn}>
                <Image
                  style={styles.userImage}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU",
                  }}
                />
                <Text style={styles.userNameText}>
                  {userInfo?.userInfo?.fullName}
                </Text>
                <View style={styles.userAddressRow}>
                  <View>
                    <Icon
                      name="place"
                      underlayColor="transparent"
                      iconStyle={styles.placeIcon}
                    />
                  </View>
                  <View style={styles.userCityRow}>
                    <Text style={styles.userCityText}>
                      {userInfo?.userInfo.address.city}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Tel
            style={{ marginTop: 10 }}
            number={`0${userInfo.userInfo.phoneNumber}`}
          />
          <Email name="Personal" email={userInfo.userInfo.email} />
          <Separator />

          <Password />

          {/* {showSecurity && <Security />} */}

          <Shares />
          <ContactUs />
          {/* {isBiometric && <Biometric />} */}

          <Logout navigation={navigation} />
        </Card>
      </View>
    </ScrollView>
  );
};

export default Profile;
