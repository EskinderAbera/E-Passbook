import { useState, useRef, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import coopLogo from "../../assets/icons/white_logo.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { COLORS } from "../../constants/theme";
import RBSheet from "react-native-raw-bottom-sheet";
import AccountActivate from "../Modals/AccountActivate";
import { useDispatch, useSelector } from "react-redux";
import ActivateAccountAction from "../../store/Actions/ActivateAccountAction";
import { setAccounts, updateAccount } from "../../store/Slices/HomeSlice";
import Loading from "../Loader";
import Modals from "../Modals";

const ShowBalance = ({ navigation, accountsf }) => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [accountNo, setAccoutNo] = useState("");
  const [account, setAccount] = useState(accountsf);
  const [showModal, setShowModal] = useState({
    type: "",
    show: false,
    desc: "",
  });
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const totalAccounts = useSelector((state) => state.accounts);
  const loader = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handlePress = () => {
    setBalanceVisible(!balanceVisible);
  };
  const refRBSheet = useRef();
  function handleAccount() {
    let account;
    if (accountNo)
      account = totalAccounts?.accounts?.accounts?.filter(
        (account) => account.accountNumber === accountNo
      )[0];
    if (account) {
      setModalOpen(true);
      setAccount({ ...account, status: true });
      dispatch(
        updateAccount({
          accountNo: accountNo,
          account: { ...account, status: true },
        })
      );
      dispatch(ActivateAccountAction(accountNo));
    } else {
      setShowModal({
        ...showModal,
        type: "error",
        show: true,
        desc: "Wrong Account Number",
      });
    }
  }

  useEffect(() => {
    showModal.show &&
      setTimeout(() => {
        setShowModal({ ...showModal, show: false });
        refRBSheet.current.close();
      }, 3000);
  }, [showModal]);

  function renderBody() {
    return (
      <>
        {showModal.show && (
          <AccountActivate msg={showModal.type} desc={showModal.desc} />
        )}
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
            <View>
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
                  <Text style={styles.accountNumber}>
                    {account?.status === true
                      ? account?.accountNumber
                      : "**********"}
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <>
      {renderBody()}
      {loader.loading && <Loading msg={"give us a moment..."} />}
      {!loader.loading && modalOpen && (
        <Modals
          props={{
            modalType: "success",
            type: "activateAccount",
            setModalOpen,
          }}
        />
      )}
    </>
  );
};

export default ShowBalance;
