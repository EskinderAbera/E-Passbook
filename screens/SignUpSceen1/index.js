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
import ErrorModal from "../../components/Modals/Error/index";
import { useDispatch, useSelector } from "react-redux";
import { CheckUserExistenceAPI } from "../../lib/api-calls/CheckUser";

const SignUpScreen1 = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const [wrongNumber, setWrongNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
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
        phone: val,
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
    if ((data.phone.length < 9) | (data.phone.length > 10)) {
      setWrongNumber("phone or username is wrong");
      setShowModal(true);
    } else {
      dispatch(CheckUserExistenceAPI(data.phone));
    }
  };

  // const handleSignUp = async () => {
  //   if ((data.phone.length < 9) | (data.phone.length > 10)) {
  //     setWrongNumber("phone or username is wrong");
  //     setShowModal(true);
  //   } else {
  //     setLoading(true);
  //     try {
  //       const response = await axios.post(`${baseUrl}/checkphone`, {
  //         phonenumber: data.phone,
  //       });
  //       if (response.data["fullName"].length > 0) {
  //         handleName(response.data["fullName"]);
  //         setLoading(false);
  //         navigation.navigate("SignUpScreen", { Phonenumber: data.phone });
  //       } else {
  //         setLoading(false);
  //         navigation.navigate("Registeration");
  //       }
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   }
  // };

  function renderBody() {
    return (
      <View style={styles.container}>
        {showModal && <ErrorModal msg={wrongNumber} />}

        <StatusBar backgroundColor="#00adef" hideTransitionAnimation="slide" />
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
                Terms of service
              </Text>
              <Text style={styles.color_textPrivate}> and</Text>
              <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
                Privacy policy
              </Text>
            </View>

            <View style={styles.button}>
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
  }

  return (
    <>
      {user.loading && <Loading msg={"Loading"} />}
      {renderBody()}
      {!user.loading && user.error && <ErrorModal msg={user.error} />}
      {!user.loading && user.userInfo.length && console.log("success")}
    </>
  );
};

export default SignUpScreen1;
