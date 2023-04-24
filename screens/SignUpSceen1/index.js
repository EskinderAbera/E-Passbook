import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import cooplogo from "../../assets/icons/cooplogo.png";
import Ethiopia from "../../assets/icons/Ethiopia.png";
import styles from "./styles";
import { COLORS } from "../../constants/theme";
import Loading from "../../components/Loader";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import checkPhoneAction from "../../store/Actions/PhoneAction";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { setUserInfo } from "../../store/Slices";
import Modals from "../../components/Modals";
import ErrorModal from "../../components/Modals/ErrorModal";
import SuccessModal from "../../components/Modals/SuccessModal";

const SignUpScreen1 = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const status = useSelector((state) => state.loading);
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    account: "",
    phone: "",
    check_PhoneTextChange: false,
    isValidAccount: true,
  });

  const phoneTextInputChange = (val) => {
    if (val.length >= 9) {
      setData({
        ...data,
        phone: val.charAt(0) === "0" ? val.slice(1) : val,
        check_PhoneTextChange: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_PhoneTextChange: false,
      });
    }
  };

  useEffect(() => {
    if (data.phone.length < 9) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [data.phone]);

  function renderBody() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={cooplogo} style={{ width: 200, height: 200 }} />
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_header}>Register Now!</Text>
          <ScrollView>
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}
            >
              Phone Number *
            </Text>
            <View style={styles.action}>
              <TouchableOpacity style={styles.callingArea}>
                <View style={styles.countryFlag}>
                  <Image
                    source={Ethiopia}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
                <View style={styles.callingCode}>
                  <Text style={COLORS.black}>+251</Text>
                </View>
              </TouchableOpacity>

              <TextInput
                style={styles.phoneNumber}
                autoCapitalize="none"
                placeholder="Enter Phone Number"
                placeholderTextColor={"#C7C7CD"}
                selectionColor={"black"}
                keyboardType="number-pad"
                onChangeText={(val) => phoneTextInputChange(val)}
                editable={data.phone.length > 10 ? false : true}
              />
              {data.check_PhoneTextChange ? (
                <Animatable.View animation="bounceIn" style={styles.animatable}>
                  <Feather
                    name="check-circle"
                    color={COLORS.primary}
                    size={20}
                  />
                </Animatable.View>
              ) : null}
            </View>

            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                By signing up you agree to our
              </Text>
              <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
                Terms of service
              </Text>
              <Text style={styles.color_textPrivate}> and</Text>
              <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
                Privacy policy
              </Text>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => dispatch(checkPhoneAction(data.phone))}
                disabled={disable}
              >
                <LinearGradient
                  colors={
                    disable
                      ? [COLORS.darkgray, COLORS.darkgray]
                      : [COLORS.primary, COLORS.primary]
                  }
                  style={styles.signIn}
                >
                  <Text
                    style={
                      disable
                        ? [styles.textSign]
                        : [styles.textSign, styles.signup]
                    }
                  >
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("SignInScreen")}
                style={[styles.signIn, styles.signin]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: COLORS.primary,
                    },
                  ]}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
  return (
    <>
      {status.loading && <Loading msg={"Loading"} />}
      {renderBody()}
      {user.error && <ErrorModal msg={user.error} />}
      {/* {user.userInfo && <SuccessModal msg={}/> } i will back to this one  */}
    </>
  );
};

export default SignUpScreen1;
