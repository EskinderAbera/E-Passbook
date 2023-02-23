import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";
import styles from "./styles";
import cooplogo from "../../assets/icons/cooplogo.png";
import { useStateContext } from "../../Contexts/ContextProvider";
import { COLORS } from "../../constants/theme";
import Loading from "../../components/Loader";
import { useEffect } from "react";
import SignUpModal from "../../components/Modals/SignupModal";

const SignUpScreen = ({ navigation, route }) => {
  const { Phonenumber } = route.params;
  const { name } = useStateContext();
  const [data, setData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const [isPasswordMismatch, setPasswordMismatch] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showWrongUsername, setShowWrongUsername] = useState(false);
  const [disable, setDisable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const textInputChange = (val) => {
    if (val.length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  useEffect(() => {
    if (
      (data.username.length >= 4) &
      (data.confirm_password.length > 4) &
      (data.password.length > 4)
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [data.username, data.password, data.confirm_password]);

  const handleSignUp = async () => {
    if (
      (data.confirm_password !== data.password) |
      (data.password.length < 4)
    ) {
      setPasswordMismatch(true);
    } else if (data.username.length < 4) {
      setShowWrongUsername(true);
    } else {
      setShowLoading(true);

      try {
        await axios.post("https://auth-atrt.onrender.com/signup", {
          phonenumber: Phonenumber,
          username: data.username,
          password: data.password,
        });
        setShowLoading(false);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigation.navigate("SignInScreen");
        }, 3000);
      } catch (error) {
        setShowLoading(false);
        console.log(error);
        setShowModal(false);
      }
    }
  };

  function Capitalize(str) {
    const name = str.toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return showLoading ? (
    <Loading msg="We're getting you Onboard" />
  ) : (
    <View style={styles.container}>
      {showModal && <SignUpModal navigation={navigation} />}
      <View style={styles.header}>
        <Image source={cooplogo} style={{ width: 200, height: 200 }} />
      </View>
      <Animatable.View
        animation={showModal ? "" : "fadeInUpBig"}
        style={styles.footer}
      >
        <View>
          <Text style={styles.text_header}>{`Hello, ${Capitalize(name)}`}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            {showWrongUsername && (
              <Animatable.View animation="fadeInUpBig" style={{ margin: 10 }}>
                <Text>wrong username!</Text>
              </Animatable.View>
            )}
            {isPasswordMismatch && (
              <Animatable.View animation="fadeInUpBig" style={{ margin: 10 }}>
                <Text>Your password won't match!</Text>
              </Animatable.View>
            )}

            <TouchableOpacity
              style={styles.signIn}
              onPress={handleSignUp}
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
                      ? [styles.textSign, { color: COLORS.backgroundDark }]
                      : [styles.textSign, styles.signup]
                  }
                >
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;
