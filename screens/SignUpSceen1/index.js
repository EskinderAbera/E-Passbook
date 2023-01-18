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
import axios from "axios";
import cooplogo from "../../assets/icons/cooplogo.png";
import Ethiopia from "../../assets/icons/Ethiopia.png";
import styles from "./styles";
import { COLORS } from "../../constants/theme";
import { useStateContext } from "../../Contexts/ContextProvider";
import PropTypes from "prop-types";
import Loading from "../../components/Loader";

const SignUpScreen1 = ({ navigation }) => {
  const { handleName } = useStateContext();
  const [wrongNumber, setWrongNumber] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    account: "",
    phone: "919584347",
    check_PhoneTextChange: false,
    isValidAccount: true,
  });

  const phoneTextInputChange = (val) => {
    if (val.length >= 9) {
      setData({
        ...data,
        // phone: val,
        check_PhoneTextChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_PhoneTextChange: false,
      });
    }
  };

  const handleSignUp = async () => {
    if (data.phone < 9) {
      setWrongNumber(true);
    } else {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://auth-atrt.onrender.com/checkphone",
          { Phonenumber: data.phone }
        );
        handleName(response.data.fullName);
        setLoading(false);
        navigation.navigate("OTPVerification", {
          Phonenumber: data.phone,
          type: "SignUp",
        });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  return loading ? (
    <Loading msg="Please... Give us a moment" />
  ) : (
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
            />
            {data.check_PhoneTextChange ? (
              <Animatable.View animation="bounceIn" style={styles.animatable}>
                <Feather name="check-circle" color="#00adef" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Privacy policy
            </Text>
          </View>

          <View style={styles.button}>
            {wrongNumber && <Text>Wrong Phone Number!</Text>}

            <TouchableOpacity style={styles.signIn} onPress={handleSignUp}>
              <LinearGradient
                colors={["#00abef", COLORS.primary]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: COLORS.white,
                    },
                  ]}
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
};

SignUpScreen1.propTypes = {
  Phonenumber: PropTypes.string,
};

export default SignUpScreen1;
