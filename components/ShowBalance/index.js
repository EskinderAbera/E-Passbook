import { useState, useRef, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import coopLogo from "../../assets/icons/white_logo.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { COLORS } from "../../constants/theme";
import { useStateContext } from "../../Contexts/ContextProvider";
import RBSheet from "react-native-raw-bottom-sheet";
import SignUpModal from "../SignupModal";
import ErrorModal from "../Error";

const ShowBalance = ({ navigation }) => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [account, setAccount] = useState(null);
  const [accountNo, setAccoutNo] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(false);

  const { accounts, updateAccounts } = useStateContext();

  const handlePress = () => {
    setBalanceVisible(!balanceVisible);
  };
  const refRBSheet = useRef();

  function handleAccount() {
    let account;
    if (accountNo)
      account = accounts.filter(
        (account) => account.accountNo === accountNo
      )[0];
    if (account) {
      setAccount({ ...account, status: true });
      updateAccounts(accountNo, { ...account, status: true });
      setShowModal(true);
    } else {
      setShowErrorModal(true);
    }
  }

  useEffect(() => {
    showModal &&
      setTimeout(() => {
        setShowModal(false);
        refRBSheet.current.close();
      }, 3000);
    showErrorModal &&
      setTimeout(() => {
        setShowErrorModal(false);
      }, 3000);
  }, [showModal, showErrorModal]);

  return (
    <>
      {showModal && <SignUpModal />}
      {showErrorModal && <ErrorModal />}
      <RBSheet
        ref={refRBSheet}
        height={320}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(33, 26, 27, 0.35)",
          },
          draggableIcon: {
            backgroundColor: "orange",
          },
        }}
      >
        <View style={styles.bottomContainer}>
          <Text
            style={{ alignSelf: "center", fontSize: 15, fontWeight: "bold" }}
          >
            Link Your Account
          </Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.amount}>Account Number </Text>
            <View
              style={[
                styles.amtContainer,
                isInputFocus && { borderColor: COLORS.secondary },
              ]}
            >
              <TextInput
                onChangeText={setAccoutNo}
                value={accountNo}
                placeholder="Enter Account Number"
                keyboardType="numeric"
                onFocus={() => setIsInputFocus(true)}
                onBlur={() => setIsInputFocus(false)}
              />
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.applyBtn}
              onPress={() => handleAccount()}
            >
              <Text style={styles.txt}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      <TouchableOpacity
        onPress={
          account?.status === true
            ? () =>
                navigation.navigate("Account", {
                  accounts: account,
                })
            : () => refRBSheet.current.open()
        }
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={
            account?.status === true
              ? [COLORS.primary, "#00bdef"]
              : ["#ddd", "#a9a9a9"]
          }
          style={styles.card}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.details}>
              <Image source={coopLogo} style={styles.coopLogo} />
              <Text style={styles.bankDetail}> Bank Details</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.balanceContainer}>
                <Text style={styles.balanceText}>BALANCE</Text>
                <View style={styles.balanceVisibility}>
                  {balanceVisible ? (
                    <Text
                      style={styles.visible}
                    >{`${account?.balance} br.`}</Text>
                  ) : (
                    <Text style={styles.visible}>
                      {[..."balance"].map((c) => "*")}
                    </Text>
                  )}
                  <Ionicons
                    name={balanceVisible ? "eye-off" : "eye"}
                    size={28}
                    color={COLORS.white}
                    onPress={account?.status && handlePress}
                    style={styles.eyeIcon}
                  />
                </View>
              </View>
              <View style={styles.accountContainer}>
                <Text style={styles.accountText}>Account Number</Text>
                <Text style={styles.accountNumber}>{account?.accountNo}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default ShowBalance;
